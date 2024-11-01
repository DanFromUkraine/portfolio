import React from "react";
import { fira } from "./lib/fonts";
import clsx from "clsx";
import Header from "@/components/header";
import "./globals.css";

export default function layout({
        children,
}: Readonly<{ children: React.ReactNode }>) {
        return (
                <html>
                        <body className="bg-main_bg text-white">
                                <main className="p-4 flex flex-col items-center justify-center [&>*]:w-[1024px] ">
                                        <Header />
                                        <div className={clsx(fira.className)}>
                                                {children}
                                        </div>
                                </main>
                        </body>
                </html>
        );
}
