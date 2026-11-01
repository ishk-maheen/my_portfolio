export default function SectionHeading({ title, accent, children }) {
  return (
    <div className="section-heading reveal">
      <h2>
        {title} <span className="gradient-text">{accent}</span>
      </h2>
      <p>{children}</p>
    </div>
  );
}
