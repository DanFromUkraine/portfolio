import Logo from "../Logo";
import Email from "../utils/Email";

export default function Footer() {
        return (
                <footer className="mt-auto">
                        <section className="flex flex-col gap-3">
                                <section className="flex gap-3">
                                        <Logo />
                                        <Email />
                                </section>
                                <p>React Front-end Developer</p>
                        </section>
                </footer>
        );
}
