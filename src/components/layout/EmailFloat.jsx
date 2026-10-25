import { site } from "../../data/site";
import EmailIcon from "../ui/EmailIcon";

export default function EmailFloat() {
  if (!site.email) return null;
  return (
    <a className="email-float" href={`mailto:${site.email}`} aria-label="Send an email">
      <EmailIcon size={24} />
    </a>
  );
}
