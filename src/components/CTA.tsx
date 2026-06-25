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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: `Agent Ops Audit: ${payload.company || payload.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await res.json().catch(() => ({}));
      if (res.ok && result.success !== "false" && result.success !== false) {
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
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <p className="kicker">{"// BOOK AN AGENT AUDIT"}</p>
          <h2 className="display-2" style={{ marginTop: 22 }}>
            Show us the workflow that keeps slowing you down.
          </h2>
          <p className="lead-sm" style={{ marginTop: 26, maxWidth: 520 }}>
            Send the messy process. We will identify where an agent can save time,
            reduce missed follow-up, or make the handoff more reliable.
          </p>

          <div className="contact-meta">
            <div>
              <div className="k">EMAIL</div>
              <a href="mailto:victor@omohasolutions.com" className="v">
                victor@omohasolutions.com
              </a>
            </div>
            <div>
              <div className="k">PHONE</div>
              <a href="tel:+19194558642" className="v">
                (919) 455-8642
              </a>
            </div>
          </div>
        </div>

        {status === "sent" ? (
          <div className="audit-form">
            <p className="kicker">REQUEST RECEIVED</p>
            <h3 className="display-3">We have your audit request.</h3>
            <p className="lead-sm">
              We will respond with next steps and a workflow review window.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="audit-form">
            <div className="field">
              <label htmlFor="agent-audit-name">NAME</label>
              <input id="agent-audit-name" type="text" name="name" required disabled={status === "sending"} placeholder="Your name" />
            </div>

            <div className="field">
              <label htmlFor="agent-audit-email">EMAIL</label>
              <input id="agent-audit-email" type="email" name="email" required disabled={status === "sending"} placeholder="you@company.com" />
            </div>

            <div className="field">
              <label htmlFor="agent-audit-company">COMPANY</label>
              <input id="agent-audit-company" type="text" name="company" disabled={status === "sending"} placeholder="Company name" />
            </div>

            <div className="field">
              <label htmlFor="agent-audit-workflow">WHAT WORKFLOW NEEDS HELP FIRST?</label>
              <select id="agent-audit-workflow" name="workflow" disabled={status === "sending"} defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>Lead follow-up</option>
                <option>Client intake</option>
                <option>Proposal drafting</option>
                <option>Support triage</option>
                <option>Research and reporting</option>
                <option>Other operations workflow</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="agent-audit-message">DESCRIBE THE MESS</label>
              <textarea
                id="agent-audit-message"
                name="message"
                rows={5}
                required
                disabled={status === "sending"}
                placeholder="Example: leads come through email and Instagram, we forget to follow up, and nobody updates the CRM..."
              />
            </div>

            {status === "error" ? (
              <p className="form-status error">
                Submission failed. Try again or email victor@omohasolutions.com directly.
              </p>
            ) : (
              <p className="form-status">We reply within one business day.</p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn btn-primary" style={{ width: "100%" }}>
              {status === "sending" ? "SENDING..." : "BOOK AGENT AUDIT"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
