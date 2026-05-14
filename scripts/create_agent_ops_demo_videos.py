#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import json
import math
import os
import subprocess
import sys
import textwrap
import urllib.error
import urllib.request

ROOT = Path('/home/victor147/.openclaw/workspace/omoha-agents')
OUT = ROOT / 'demo-videos'
FRAMES = OUT / 'frames'
VIDEOS = OUT / 'exports'
AUDIO = OUT / 'audio'
for p in (FRAMES, VIDEOS, AUDIO):
    p.mkdir(parents=True, exist_ok=True)

W, H = 1920, 1080
BG = (8, 12, 18)
PANEL = (18, 26, 38)
BORDER = (54, 70, 94)
TEXT = (238, 245, 255)
MUTED = (155, 171, 194)
CYAN = (69, 214, 255)
GREEN = (80, 230, 160)
YELLOW = (255, 207, 82)
RED = (255, 105, 105)
PURPLE = (160, 130, 255)

FONT_DIRS = ['/usr/share/fonts/truetype/dejavu', '/usr/share/fonts/truetype/liberation2']

def font(name='DejaVuSans.ttf', size=40):
    for d in FONT_DIRS:
        p = Path(d) / name
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()

F_TITLE = font('DejaVuSans-Bold.ttf', 62)
F_H1 = font('DejaVuSans-Bold.ttf', 46)
F_BODY = font('DejaVuSans.ttf', 30)
F_SMALL = font('DejaVuSans.ttf', 23)
F_MONO = font('DejaVuSansMono.ttf', 24)
F_MONO_B = font('DejaVuSansMono-Bold.ttf', 25)


def load_env_file(path: Path):
    if not path.exists():
        return
    for raw in path.read_text(errors='ignore').splitlines():
        line = raw.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, val = line.split('=', 1)
        key = key.strip()
        val = val.strip().strip('"').strip("'")
        if key and val and key not in os.environ:
            os.environ[key] = val


def get_openai_tts_key():
    load_env_file(Path.home() / '.hermes' / '.env')
    return os.getenv('VOICE_TOOLS_OPENAI_KEY') or os.getenv('OPENAI_API_KEY')


def run(cmd):
    return subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)


def ffprobe_duration(path: Path) -> float:
    out = run([
        'ffprobe', '-v', 'error', '-show_entries', 'format=duration',
        '-of', 'default=noprint_wrappers=1:nokey=1', str(path)
    ]).stdout.strip()
    return float(out)


def synthesize_openai_tts(name: str, text: str) -> Path | None:
    key = get_openai_tts_key()
    if not key:
        print('WARN: No VOICE_TOOLS_OPENAI_KEY or OPENAI_API_KEY found; generating silent videos.', file=sys.stderr)
        return None

    out = AUDIO / f'{name}.mp3'
    payload = {
        'model': os.getenv('OPENAI_TTS_MODEL', 'gpt-4o-mini-tts'),
        'voice': os.getenv('OPENAI_TTS_VOICE', 'alloy'),
        'input': text,
        'format': 'mp3',
    }
    req = urllib.request.Request(
        'https://api.openai.com/v1/audio/speech',
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Authorization': f'Bearer {key}',
            'Content-Type': 'application/json',
        },
        method='POST',
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            out.write_bytes(resp.read())
    except urllib.error.HTTPError as e:
        detail = e.read().decode('utf-8', errors='replace')[:500]
        raise RuntimeError(f'OpenAI TTS failed for {name}: HTTP {e.code}: {detail}') from e
    except Exception as e:
        raise RuntimeError(f'OpenAI TTS failed for {name}: {e}') from e
    return out


def wrap(draw, text, fnt, width):
    lines = []
    for para in text.split('\n'):
        if not para:
            lines.append('')
            continue
        words = para.split()
        cur = ''
        for w in words:
            test = (cur + ' ' + w).strip()
            if draw.textbbox((0, 0), test, font=fnt)[2] <= width:
                cur = test
            else:
                if cur:
                    lines.append(cur)
                cur = w
        if cur:
            lines.append(cur)
    return lines


def draw_text(draw, xy, text, fnt, fill=TEXT, width=None, spacing=10):
    x, y = xy
    lines = wrap(draw, text, fnt, width) if width else text.split('\n')
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += fnt.size + spacing
    return y


def rounded(draw, box, fill=PANEL, outline=BORDER, radius=28, width=2):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def pill(draw, x, y, text, color=CYAN):
    pad_x, pad_y = 22, 10
    bb = draw.textbbox((0, 0), text, font=F_SMALL)
    w, h = bb[2], bb[3]
    draw.rounded_rectangle((x, y, x + w + pad_x * 2, y + h + pad_y * 2), radius=22,
                           fill=(color[0] // 5, color[1] // 5, color[2] // 5), outline=color, width=2)
    draw.text((x + pad_x, y + pad_y - 2), text, font=F_SMALL, fill=color)


def chrome(draw, box, title):
    x1, y1, x2, y2 = box
    rounded(draw, box, fill=PANEL, outline=BORDER, radius=24, width=2)
    draw.rounded_rectangle((x1, y1, x2, y1 + 58), radius=24, fill=(15, 22, 32))
    draw.rectangle((x1, y1 + 34, x2, y1 + 58), fill=(15, 22, 32))
    for i, c in enumerate([(255, 95, 87), (255, 189, 46), (39, 201, 63)]):
        draw.ellipse((x1 + 26 + i * 34, y1 + 22, x1 + 44 + i * 34, y1 + 40), fill=c)
    draw.text((x1 + 140, y1 + 18), title, font=F_SMALL, fill=MUTED)


def base(title, subtitle):
    img = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(img)
    for x in range(0, W, 80):
        d.line((x, 0, x, H), fill=(11, 17, 25), width=1)
    for y in range(0, H, 80):
        d.line((0, y, W, y), fill=(11, 17, 25), width=1)
    pill(d, 70, 55, 'OMOHA SOLUTIONS / AGENT OPS', CYAN)
    d.text((70, 118), title, font=F_TITLE, fill=TEXT)
    draw_text(d, (72, 198), subtitle, F_BODY, MUTED, width=1200)
    return img, d


def save_slide(video, idx, img):
    path = FRAMES / video
    path.mkdir(exist_ok=True)
    img.save(path / f'{idx:02d}.png', quality=95)


def input_card(d, box, header, body, accent=YELLOW):
    chrome(d, box, header)
    x1, y1, x2, y2 = box
    pill(d, x1 + 34, y1 + 86, 'NEW INPUT', accent)
    draw_text(d, (x1 + 40, y1 + 145), body, F_MONO, TEXT, width=x2 - x1 - 80, spacing=9)


def agent_card(d, box, header, items, accent=CYAN):
    chrome(d, box, header)
    x1, y1, x2, y2 = box
    pill(d, x1 + 34, y1 + 86, 'AGENT OUTPUT', accent)
    y = y1 + 148
    for label, val, col in items:
        d.text((x1 + 44, y), label, font=F_MONO_B, fill=col)
        y = draw_text(d, (x1 + 270, y), val, F_MONO, TEXT, width=x2 - x1 - 320, spacing=7) + 8


def cta_slide(video, idx, title, line):
    img, d = base(title, line)
    rounded(d, (355, 390, 1565, 740), fill=(10, 18, 28), outline=CYAN, radius=34, width=3)
    d.text((520, 455), 'BOOK AN AGENT AUDIT', font=F_TITLE, fill=TEXT)
    d.text((610, 555), 'agents.omohasolutions.com', font=F_H1, fill=CYAN)
    d.text((520, 650), 'Focused AI agents for messy business workflows.', font=F_BODY, fill=MUTED)
    save_slide(video, idx, img)


demos = {
    'lead-follow-up-agent-demo': {
        'title': 'Lead Follow-Up Agent',
        'subtitle': 'Stop losing leads after they fill out your form.',
        'voiceover': "Most businesses do not lose leads because nobody was interested. They lose leads because follow-up is slow. Here, a cleaning company owner explains that leads are coming in from different places, but she cannot always respond fast enough. The follow-up agent reads the submission, identifies the business type, extracts the pain point, scores urgency, and decides the next best step. Instead of Victor starting from a blank page, the response is already drafted and aimed at booking the Agent Audit. The lead is logged, qualified, and given a clear next action. This is a narrow agent doing one revenue-connected job. If your business is leaking leads like this, book an Agent Audit at agents.omohasolutions.com.",
        'slides': [
            ('pain', 'Most businesses do not lose leads because nobody was interested. They lose leads because follow-up is slow.'),
            ('input', 'Name: Sarah Mitchell\nCompany: BrightPath Cleaning Co.\nMessage: We keep losing leads because I am not always able to respond quickly. People ask for quotes through the website, text, and email. I need a better way to qualify and follow up before they choose another company.'),
            ('agent', [('Business type', 'Residential and commercial cleaning service', CYAN), ('Pain point', 'Slow and scattered lead follow-up', YELLOW), ('Urgency', '4 / 5 - active revenue leak', RED), ('Next step', 'Invite Sarah to book an Agent Audit', GREEN)]),
            ('email', 'Subject: Re: Cleaning lead follow-up system\n\nHi Sarah, what you described is exactly the kind of operational leak we look for: interested prospects are coming in, but follow-up depends too much on you being available in the moment.\n\nA focused follow-up agent can help capture inquiries, organize urgency, draft replies, and keep the next step visible.\n\nBook the Agent Audit: agents.omohasolutions.com'),
            ('crm', [('Sarah Mitchell', 'BrightPath Cleaning Co.', 'Follow-up drafted', 'Book audit'), ('Marcus Reed', 'Oakline Consulting', 'Needs intake review', 'Clarify workflow'), ('Alina Brooks', 'Serenity Med Spa', 'Proposal ready', 'Send follow-up')]),
        ]
    },
    'client-intake-agent-demo': {
        'title': 'Client Intake Agent',
        'subtitle': 'Turn messy client requests into organized next steps.',
        'voiceover': "Messy client requests create hidden drag before work even begins. This client asks for website help, AI, booking improvements, and better follow-up all in one message. The intake agent separates the request into outcomes, pain points, missing information, and follow-up questions. Now the team has a clean task card instead of a vague message sitting in the inbox. The client gets a clear next step: an Agent Audit focused on the actual workflow leak. If your intake process is creating confusion, book an Agent Audit at agents.omohasolutions.com.",
        'slides': [
            ('pain', 'Messy client requests create hidden drag before work even begins.'),
            ('input', 'From: Marcus Reed, Oakline Consulting\n\nWe need help cleaning up our website and maybe adding AI somehow. People book calls through a form, but the requests are messy and my assistant has to go back and forth asking what they actually need. We also want better follow-up after calls.'),
            ('agent', [('Requested outcome', 'Cleaner conversion flow and structured intake', CYAN), ('Pain points', 'Vague requests, repeated clarification, weak follow-up', YELLOW), ('Missing info', 'CRM, monthly inquiries, current booking flow', PURPLE), ('First agent', 'Client Intake Agent, then Follow-Up Agent', GREEN)]),
            ('task', 'Task: Audit Oakline intake and follow-up workflow\n\nChecklist:\n[ ] Review current website form\n[ ] Map intake fields\n[ ] Identify missing qualification questions\n[ ] Review post-call follow-up\n[ ] Recommend first narrow agent\n[ ] Prepare Agent Audit agenda'),
            ('email', 'Hi Marcus,\n\nThe strongest starting point is not adding AI broadly. It is tightening the intake and follow-up workflow so every request becomes a clear next step.\n\nI would start with an Agent Audit focused on your website form, qualification questions, booking flow, and post-call follow-up.\n\nBook here: agents.omohasolutions.com'),
        ]
    },
    'proposal-drafting-agent-demo': {
        'title': 'Proposal Drafting Agent',
        'subtitle': 'Turn discovery notes into a proposal draft in minutes.',
        'voiceover': "Good sales calls lose momentum when the proposal takes too long to send. Here, a med spa has missed calls, slow form follow-up, scattered notes, and no clear first AI use case. The proposal agent turns rough notes into workflow leaks, recommended scope, timeline, pricing, and next step. Now the founder is not starting from a blank page. The proposal is already organized around the client's real operational pain. The follow-up email is ready to send while the conversation is still warm. If proposals slow down your sales cycle, book an Agent Audit at agents.omohasolutions.com.",
        'slides': [
            ('pain', 'Good sales calls lose momentum when the proposal takes too long to send.'),
            ('input', 'Client: Serenity Med Spa\nContact: Alina Brooks\n\nProblems:\n- Missed calls during busy hours\n- Website form submissions are not answered quickly\n- Staff copy client notes into different tools\n- Consultation follow-up is inconsistent\n- Owner wants AI but not a generic chatbot'),
            ('agent', [('Workflow leaks', 'Missed calls, slow forms, scattered notes, weak follow-up', YELLOW), ('Recommended move', 'Agent Audit first', CYAN), ('First build', 'Med Spa Intake + Follow-Up Agent', GREEN), ('Positioning', 'Focused workflow support, not a generic chatbot', PURPLE)]),
            ('proposal', 'Proposal: Serenity Med Spa Agent Workflow\n\nSituation: inquiries arrive through calls and forms, but response depends on staff availability.\n\nScope:\n1. Map inquiry sources\n2. Review intake questions\n3. Identify where leads slow down\n4. Define the first narrow agent role\n5. Deliver workflow map and build recommendation'),
            ('email', 'Subject: Serenity Med Spa - proposed first agent workflow\n\nHi Alina,\n\nI would not recommend starting with a generic chatbot. The better first move is to identify the exact operational leak around new inquiries, missed calls, intake, and consultation follow-up.\n\nAgent Audit: $500 one-time\nFirst Agent Build: from $2,500\nManaged Agent Ops: from $2,000/month\n\nBook here: agents.omohasolutions.com'),
        ]
    }
}


def make_slide(video, idx, title, subtitle, kind, data):
    img, d = base(title, subtitle)
    if kind == 'pain':
        rounded(d, (220, 360, 1700, 735), fill=(13, 20, 31), outline=RED, radius=34, width=3)
        d.text((285, 430), 'THE LEAK', font=F_H1, fill=RED)
        draw_text(d, (285, 515), data, F_H1, TEXT, width=1340, spacing=16)
    elif kind == 'input':
        input_card(d, (170, 315, 1750, 880), 'Incoming lead / client message', data, YELLOW)
    elif kind == 'agent':
        agent_card(d, (170, 305, 1750, 900), 'Focused agent analysis', data, CYAN)
    elif kind == 'email':
        chrome(d, (170, 292, 1750, 910), 'Drafted follow-up email')
        draw_text(d, (225, 385), data, F_MONO, TEXT, width=1480, spacing=7)
    elif kind == 'task':
        chrome(d, (250, 300, 1670, 885), 'Internal task card')
        draw_text(d, (310, 390), data, F_MONO, TEXT, width=1320, spacing=12)
    elif kind == 'proposal':
        chrome(d, (210, 285, 1710, 910), 'Proposal draft')
        draw_text(d, (270, 375), data, F_MONO, TEXT, width=1380, spacing=10)
    elif kind == 'crm':
        chrome(d, (140, 310, 1780, 865), 'Lead Tracker CRM')
        x, y = 210, 420
        cols = ['Name', 'Company', 'Status', 'Next Step']
        widths = [300, 420, 390, 330]
        for c, w in zip(cols, widths):
            d.text((x, y), c, font=F_MONO_B, fill=CYAN)
            x += w
        y += 54
        for row in data:
            x = 210
            for val, w in zip(row, widths):
                d.text((x, y), val, font=F_MONO, fill=TEXT)
                x += w
            y += 70
            d.line((200, y - 22, 1710, y - 22), fill=BORDER, width=1)
    save_slide(video, idx, img)


def make_video(video, title, subtitle, slides, voiceover):
    folder = FRAMES / video
    if folder.exists():
        for f in folder.glob('*.png'):
            f.unlink()
    folder.mkdir(exist_ok=True)

    for i, (kind, data) in enumerate(slides, start=1):
        make_slide(video, i, title, subtitle, kind, data)
    cta_slide(video, len(slides) + 1, title, 'Want this mapped for your business?')

    audio = synthesize_openai_tts(video, voiceover)
    slide_count = len(slides) + 1
    if audio:
        audio_duration = ffprobe_duration(audio)
        slide_duration = max(5.5, (audio_duration + 2.0) / slide_count)
    else:
        audio_duration = 0.0
        slide_duration = 7.0

    concat = OUT / f'{video}_concat.txt'
    images = sorted(folder.glob('*.png'))
    with concat.open('w') as f:
        for p in images:
            f.write(f"file '{p}'\n")
            f.write(f'duration {slide_duration:.3f}\n')
        f.write(f"file '{images[-1]}'\n")

    tmp_video = VIDEOS / f'{video}.video-only.mp4'
    final = VIDEOS / f'{video}.mp4'
    run([
        'ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', str(concat),
        '-vf', 'fps=30,format=yuv420p', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', str(tmp_video)
    ])

    if audio:
        run([
            'ffmpeg', '-y', '-i', str(tmp_video), '-i', str(audio),
            '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k',
            '-shortest', '-movflags', '+faststart', str(final)
        ])
        tmp_video.unlink(missing_ok=True)
    else:
        run([
            'ffmpeg', '-y', '-i', str(tmp_video), '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000',
            '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'copy', '-c:a', 'aac', '-shortest', '-movflags', '+faststart', str(final)
        ])
        tmp_video.unlink(missing_ok=True)

    return final, audio, slide_duration, audio_duration


def main():
    made = []
    for name, cfg in demos.items():
        made.append((name, *make_video(name, cfg['title'], cfg['subtitle'], cfg['slides'], cfg['voiceover'])))

    print('Created videos:')
    for name, video, audio, slide_duration, audio_duration in made:
        print(f'- {video}')
        if audio:
            print(f'  audio={audio} audio_duration={audio_duration:.2f}s slide_duration={slide_duration:.2f}s')
        else:
            print(f'  audio=silent slide_duration={slide_duration:.2f}s')


if __name__ == '__main__':
    main()
