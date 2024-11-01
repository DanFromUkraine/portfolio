import React from "react";

import Header from "@/app/components/header";
import "./globals.css";
import HTMLAndBodyLayout from "./components/HTML&bodyLayout";
import { LangContextProvider } from "./lib/context";

export default function layout({
        children,
}: Readonly<{ children: React.ReactNode }>) {
        return (
                <LangContextProvider.LangProvider>
                        <HTMLAndBodyLayout>
                                <main className="p-4 flex flex-col items-center justify-center [&>*]:w-[76vw] ">
                                        <Header />
                                        <div>{children}</div>
                                </main>
                        </HTMLAndBodyLayout>
                </LangContextProvider.LangProvider>
        );
}
