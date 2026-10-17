export default function Button({ variant = "primary", href, children, ...rest }) {
  const className = `btn btn-${variant}`;
  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
