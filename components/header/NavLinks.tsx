import { NavLinksContent } from "../constants/header";
import NavLink from "./NavLink";

export default function NavLinks() {
  return (
    <nav>
      {NavLinksContent.map((linkContent, i) => (
        <NavLink linkContent={linkContent} key={i} />
      ))}
    </nav>
  );
}
