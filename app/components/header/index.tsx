import Logo from "../Logo";
import ChangeLanguage from "./ChangeLanguage";
import NavLinks from "./NavLinks";

export default function Header() {
        return (
                <header className="flex justify-between items-center">
                        <Logo />

                        <section className="flex gap-8 text-secondary">
                                <NavLinks />
                                <ChangeLanguage />
                        </section>
                </header>
        );
}
