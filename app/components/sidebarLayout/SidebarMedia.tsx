import { MEDIA_LINKS } from "@/app/lib/constants/contacts";
import HoverLinkIcon from "../utils/HoverLinkIcon";

export default function SidebarMedia() {
        return (
                <section className="flex flex-col gap-2 justify-center items-center w-8">
                        <span className="bg-secondary w-[1px] h-44" />
                        {MEDIA_LINKS.map(({ href, id, Icon }) => (
                                <HoverLinkIcon
                                        key={id}
                                        href={href}
                                        Icon={Icon}
                                />
                        ))}
                </section>
        );
}
