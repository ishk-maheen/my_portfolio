import { useState } from "react";
import { site } from "../../data/site";
import { formOptions } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ContactMethod from "../cards/ContactMethod";
import GithubIcon from "../ui/GithubIcon";
import EmailIcon from "../ui/EmailIcon";
import LinkedinIcon from "../ui/LinkedinIcon";
import FacebookIcon from "../ui/FacebookIcon";
import InquiryIcon from "../ui/InquiryIcon";
import WhatsappIcon from "../ui/WhatsappIcon";

const ENDPOINT = "https://formsubmit.co/ajax/";
const INITIAL_NOTE = "Your inquiry is sent directly to my email inbox. I'll reply to the email address you enter.";
const initialForm = {
  name: "",
  email: "",
  service: formOptions.service[0],
  budget: formOptions.budget[0],
  timeline: formOptions.timeline[0],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", text: INITIAL_NOTE });
  const sending = status.type === "sending";

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    if (!site.email) {
      setStatus({ type: "error", text: "The contact email is not configured. Set VITE_CONTACT_EMAIL in the .env file." });
      return;
    }
    // Spam trap: real visitors never see or fill this field.
    if (new FormData(e.currentTarget).get("_honey")) {
      setForm(initialForm);
      setStatus({ type: "success", text: "Thank you! Your inquiry was sent. I'll get back to you by email." });
      return;
    }

    const name = form.name.trim();
    setStatus({ type: "sending", text: "Sending your inquiry…" });
    try {
      const res = await fetch(ENDPOINT + site.email, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Project inquiry from " + name,
          _template: "table",
          _captcha: "false",
          _replyto: form.email.trim(),
          Name: name,
          Email: form.email.trim(),
          Service: form.service,
          Budget: form.budget,
          Timeline: form.timeline,
          "Project details": form.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false || data.success === "false") throw new Error(data.message || "Request failed");
      setForm(initialForm);
      setStatus({ type: "success", text: "Thank you! Your inquiry was sent. I'll get back to you by email." });
    } catch (err) {
      // The visitor sees a friendly message; the real reason (e.g. form not activated yet) goes to the console.
      console.error("Inquiry form could not be sent:", err.message);
      setStatus({ type: "error", text: "Sorry, your inquiry could not be sent. Please try again, or email me directly at" });
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <SectionHeading eyebrow="Have a project in mind?" title="Let's build your next" accent="website.">
          Tell me what you're trying to achieve. We can discuss the requirements and work out a practical next step.
        </SectionHeading>
        <div className="contact-wrap">
          <div className="contact-intro reveal">
            <h3>Let's talk about your idea.</h3>
            <p>Share a short overview of your business, project goals and the features you need. I'll use that context to understand how I may be able to help.</p>
            <div className="contact-methods">
              {site.email && <ContactMethod href={`mailto:${site.email}`} icon={<EmailIcon />} title="Email" text={site.email} />}
              <ContactMethod external href={site.whatsapp} icon={<WhatsappIcon />} title="WhatsApp" text="Chat with me directly" />
              <ContactMethod external href={site.linkedin} icon={<LinkedinIcon />} title="LinkedIn" text="Connect professionally" />
              <ContactMethod external href={site.github} icon={<GithubIcon />} title="GitHub" text="Explore repositories" />
              <ContactMethod external href={site.facebook} icon={<FacebookIcon />} title="Facebook" text="Message or follow me" />
              <ContactMethod href="#contact-form" icon={<InquiryIcon />} title="Project inquiry" text="Send a message about your project" />
            </div>
          </div>
          <form className="contact-form reveal" id="contact-form" onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input id="name" name="name" autoComplete="name" required placeholder="Name" value={form.name} onChange={update} />
              </div>
              <div className="field">
                <label htmlFor="email">Your email *</label>
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@gmail.com" value={form.email} onChange={update} />
              </div>
              <div className="field full">
                <label htmlFor="service">What do you need?</label>
                <select id="service" name="service" value={form.service} onChange={update}>
                  {formOptions.service.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="budget">Estimated budget (optional)</label>
                <select id="budget" name="budget" value={form.budget} onChange={update}>
                  {formOptions.budget.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="timeline">Preferred timeline</label>
                <select id="timeline" name="timeline" value={form.timeline} onChange={update}>
                  {formOptions.timeline.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="field full field-grow">
                <label htmlFor="message">Tell me about your project *</label>
                <textarea id="message" name="message" required placeholder="What are you building, who is it for, and what should it do?" value={form.message} onChange={update} />
              </div>
              <div className="field full">
                <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <Button type="submit" disabled={sending}>{sending ? "Sending…" : "Send Inquiry ↗"}</Button>
                <p className={`form-note form-note--${status.type}`} id="formNote" role="status" aria-live="polite">
                  {status.text}
                  {status.type === "error" && site.email && (
                    <> <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.</>
                  )}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
