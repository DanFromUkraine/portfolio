"use client";
import React, { ReactNode, useContext } from "react";
import { fira } from "@/app/lib/fonts";
import clsx from "clsx";
import { LangContextProvider } from "@/app/lib/context";
import { changeUaToUkOrJustReturn } from "@/app/lib/utils/language";

export default function HTMLAndBodyLayout({
        children,
}: {
        children: ReactNode;
}) {
        const { language } = useContext(LangContextProvider.Lang);

        return (
                <html lang={changeUaToUkOrJustReturn(language)}>
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
