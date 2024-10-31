import { LinkType } from "@/app/lib/definitions";
import Link from "next/link";

export default function NavLink({
  linkContent: { href, label },
}: {
  linkContent: LinkType;
}) {
  return <Link href={href}>{label}</Link>;
}
