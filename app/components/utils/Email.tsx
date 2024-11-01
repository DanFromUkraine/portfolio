"use client";

import { SECONDARY } from "@/app/lib/constants/colors";
import { EMAIL } from "@/app/lib/constants/contacts";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { useCallback, useState } from "react";
import CopiedMessage from "./CopiedMessage";

export default function Email() {
        const [isVisible, setIsVisible] = useState(false);
        const onClick = useCallback(async () => {
                await navigator.clipboard.writeText(EMAIL);
                setIsVisible(true);
                setTimeout(() => {
                        setIsVisible(false);
                }, 2500);
        }, []);
        return (
                <button
                        className="flex gap-2 items-center cursor-copy"
                        onClick={onClick}
                        onKeyDown={onClick}
                >
                        <AlternateEmailOutlinedIcon sx={{ color: SECONDARY }} />
                        <span>{EMAIL}</span>
                        <CopiedMessage visible={isVisible} />
                </button>
        );
}
