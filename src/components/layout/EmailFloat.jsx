import { site } from "../../data/site";
import WhatsappIcon from "../ui/WhatsappIcon";

export default function WhatsappFloat() {
  return (
    <a className="whatsapp-float" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <WhatsappIcon size={26} />
    </a>
  );
}
