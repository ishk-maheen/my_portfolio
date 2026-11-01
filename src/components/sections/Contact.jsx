import { useRef, useState } from "react";
import { site } from "../../data/site";
import { formOptions } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ContactMethod from "../cards/ContactMethod";
import GithubIcon from "../ui/GithubIcon";
import EmailIcon from "../ui/EmailIcon";
import LinkedinIcon from "../ui/LinkedinIcon";

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f) {
  const errors = {};
  if (f.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!f.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(f.email.trim())) errors.email = "Please enter a valid email address, like you@example.com.";
  if (f.message.trim().length < 10) errors.message = "Please describe your project in at least a few words (10 characters minimum).";
  return errors;
}

export default function Contact() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", text: INITIAL_NOTE });
  const sending = status.type === "sending";

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: update,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const fieldError = (name) =>
    errors[name] ? <p className="field-error" id={`${name}-error`}>{errors[name]}</p> : null;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const found = validate(form);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setStatus({ type: "error-fields", text: "Please fix the highlighted fields and try again." });
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }
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
        <SectionHeading title="Let's talk about your" accent="project.">
          Tell me what you need and I'll reply by email.
        </SectionHeading>
        <div className="contact-wrap">
          <div className="contact-intro reveal">
            <h3>Send me a message</h3>
            <p>Share what you are building, who it is for and any deadline you have in mind.</p>
            <div className="contact-methods">
              {site.email && <ContactMethod href={`mailto:${site.email}`} icon={<EmailIcon />} title="Email" text={site.email} />}
              <ContactMethod external href={site.linkedin} icon={<LinkedinIcon />} title="LinkedIn" text="Message me on LinkedIn" />
              <ContactMethod external href={site.github} icon={<GithubIcon />} title="GitHub" text="See my code" />
            </div>
          </div>
          <form className="contact-form reveal" id="contact-form" ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input {...fieldProps("name")} autoComplete="name" required placeholder="Your name" />
                {fieldError("name")}
              </div>
              <div className="field">
                <label htmlFor="email">Your email *</label>
                <input {...fieldProps("email")} type="email" autoComplete="email" required placeholder="you@example.com" />
                {fieldError("email")}
              </div>
              <div className="field full">
                <label htmlFor="service">Project type</label>
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
                <label htmlFor="message">Project description *</label>
                <textarea {...fieldProps("message")} required placeholder="What are you building, who is it for, and what should it do?" />
                {fieldError("message")}
              </div>
              <div className="field full">
                <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <Button type="submit" disabled={sending}>{sending ? "Sending…" : "Send Inquiry ↗"}</Button>
                <p className={`form-note form-note--${status.type === "error-fields" ? "error" : status.type}`} id="formNote" role="status" aria-live="polite">
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
