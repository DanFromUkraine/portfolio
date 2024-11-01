import React, { ReactNode } from "react";
import { fira } from "@/app/lib/fonts";
import clsx from "clsx";

export default function HTMLAndBodyLayout({
        children,
}: {
        children: ReactNode;
}) {
        return (
                <html>
                        <body
                                className={clsx(
                                        "bg-main_bg text-white",
                                        fira.className
                                )}
                        >
                                {children}
                        </body>
                </html>
        );
}
