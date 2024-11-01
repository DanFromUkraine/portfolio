import { NavLinksContent } from "../../lib/constants/header";
import NavLink from "./NavLink";

export default function NavLinks() {
        return (
                <nav className="flex gap-8">
                        {NavLinksContent.map((linkContent, i) => (
                                <NavLink linkContent={linkContent} key={i} />
                        ))}
                </nav>
        );
}
