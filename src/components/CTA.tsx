"use client";

import { useState, type FormEvent } from "react";

export function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      workflow: data.get("workflow"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/victor@omohasolutions.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: `Agent Ops Audit: ${payload.company || payload.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">{"// BOOK AN AGENT AUDIT"}</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          SHOW US THE WORKFLOW THAT KEEPS SLOWING YOU DOWN.
        </h2>

        <p className="mt-6 text-white/50 max-w-2xl leading-relaxed">
          Send the messy process. We will identify where an agent can save time,
          reduce missed follow-up, or make the handoff more reliable.
        </p>

        {status === "sent" ? (
          <div className="mt-12 max-w-xl border border-cyan/30 bg-cyan/5 px-6 py-8">
            <p className="text-cyan font-semibold text-lg">Audit request received.</p>
            <p className="text-white/50 mt-2 text-sm">
              We will respond with next steps and a workflow review window.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-xl flex flex-col gap-6"
          >
            <div>
              <label className="label-mono block mb-2">NAME</label>
              <input
                type="text"
                name="name"
                required
                disabled={status === "sending"}
                placeholder="Your name"
                className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label className="label-mono block mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                required
                disabled={status === "sending"}
                placeholder="you@company.com"
                className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label className="label-mono block mb-2">COMPANY</label>
              <input
                type="text"
                name="company"
                disabled={status === "sending"}
                placeholder="Company name"
                className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label className="label-mono block mb-2">WHAT WORKFLOW NEEDS HELP FIRST?</label>
              <select
                name="workflow"
                disabled={status === "sending"}
                className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan transition-colors disabled:opacity-50"
                defaultValue=""
              >
                <option value="" disabled>Choose one</option>
                <option>Lead follow-up</option>
                <option>Client intake</option>
                <option>Proposal drafting</option>
                <option>Support triage</option>
                <option>Research and reporting</option>
                <option>Other operations workflow</option>
              </select>
            </div>

            <div>
              <label className="label-mono block mb-2">DESCRIBE THE MESS</label>
              <textarea
                name="message"
                rows={4}
                required
                disabled={status === "sending"}
                placeholder="Example: leads come through email and Instagram, we forget to follow up, and nobody updates the CRM..."
                className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors resize-none disabled:opacity-50"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Submission failed. Try again or email victor@omohasolutions.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-cyan text-black font-semibold px-8 py-4 text-sm tracking-wider hover:bg-cyan/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "SENDING..." : "BOOK AGENT AUDIT"}
            </button>
          </form>
        )}

        <div className="mt-16 flex flex-col sm:flex-row gap-8 text-sm text-white/40">
          <div>
            <p className="font-mono text-cyan text-xs mb-1">EMAIL</p>
            <a href="mailto:victor@omohasolutions.com" className="hover:text-white transition-colors">
              victor@omohasolutions.com
            </a>
          </div>
          <div>
            <p className="font-mono text-cyan text-xs mb-1">PHONE</p>
            <a href="tel:+19194558642" className="hover:text-white transition-colors">
              (919) 455-8642
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
