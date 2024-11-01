"use client";

import { SECONDARY, SECONDARY_HOVER } from "@/app/lib/constants/colors";
import { Icon } from "@/app/lib/definitions";
import { useCallback, useState } from "react";

export default function HoverLinkIcon({
        Icon,
        href,
}: {
        Icon: Icon;
        href: string;
}) {
        const [color, setColor] = useState(SECONDARY);
        const onMouseEnter = useCallback(() => setColor(SECONDARY_HOVER), []),
                onMouseLeave = useCallback(() => setColor(SECONDARY), []);
        return (
                <a
                        href={href}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        target="_blank"
                >
                        <Icon sx={{ color }} />
                </a>
        );
}
