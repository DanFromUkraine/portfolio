"use client";

import { SECONDARY, SECONDARY_HOVER } from "@/app/lib/constants/colors";
import { Icon } from "@/app/lib/definitions";
import { useCallback, useState } from "react";

export default function HoverIcon({Icon}: {Icon: Icon}) {
        const [color, setColor] = useState(SECONDARY);
        const onMouseEnter = useCallback(() => setColor(SECONDARY_HOVER), []),
                onMouseLeave = useCallback(() => setColor(SECONDARY), []);
        return (
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Icon sx={{ color }} />
                </span>
        );
}
