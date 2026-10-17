export default function ContactMethod({ href, external, icon, title, text }) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className="contact-method" href={href} {...props}>
      <span className="contact-icon" aria-hidden="true">{icon}</span>
      <span className="contact-text">
        <b>{title}</b>
        <small>{text}</small>
      </span>
      <span className="contact-arrow" aria-hidden="true">{external ? "↗" : "↓"}</span>
    </a>
  );
}
