"use client";
import { LinkType } from "@/app/lib/definitions";
import Link from "next/link";
import HashtagLabel from "../utils/#label";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({
        linkContent: { href, label },
}: {
        linkContent: LinkType;
}) {
        const currentPathname = usePathname();
        const isLinkToCurrPath = currentPathname === href;

        return (
                <Link href={href}>
                        <HashtagLabel
                                className={clsx("text-base", {
                                        "last:!text-white": isLinkToCurrPath,
                                })}
                        >
                                {label}
                        </HashtagLabel>
                </Link>
        );
}
