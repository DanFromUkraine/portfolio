"use client";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect } from "react";

export default function CopiedMessage({ visible }: { visible: boolean }) {
        useEffect(() => {
                gsap.to(".email", {
                        opacity: visible ? 1 : 0,
                        duration: 0.08,
                });
        }, [visible]);

        return (
                <span
                        className={clsx("email", "gray-border p-2 text-xs", {
                                "!opacity-0": !visible,
                        })}
                >
                        Copied!
                </span>
        );
}
