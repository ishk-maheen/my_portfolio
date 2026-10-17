export default function BackToTop({ show }) {
  return (
    <a href="#home" className={`back-top${show ? " show" : ""}`} aria-label="Back to top">↑</a>
  );
}
