export default function SectionHeading({ eyebrow, title, accent, children }) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow">{eyebrow}</div>
      <h2>
        {title} <span className="gradient-text">{accent}</span>
      </h2>
      <p>{children}</p>
    </div>
  );
}
