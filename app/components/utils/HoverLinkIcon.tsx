import { Icon } from "@/app/lib/definitions";
import MuiIcon from "./MuiIcon";

export default function HoverLinkIcon({
  Icon,
  href,
}: {
  Icon: Icon;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <MuiIcon MuiIcon={Icon} />
    </a>
  );
}
