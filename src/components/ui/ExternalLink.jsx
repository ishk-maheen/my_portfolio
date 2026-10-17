export default function ExternalLink({ href, className, children, ...rest }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
