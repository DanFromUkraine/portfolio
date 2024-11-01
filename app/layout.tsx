import React, { ReactNode } from "react";

import Header from "@/app/components/header";
import "./globals.css";
import HTMLAndBodyLayout from "./components/HTML&bodyLayout";
import { LangContextProvider } from "./lib/context";
import Footer from "./components/footer";
import SidebarLayout from "./components/sidebarLayout";

export default function layout({
        children,
}: Readonly<{ children: ReactNode }>) {
        return (
                <LangContextProvider.LangProvider>
                        <HTMLAndBodyLayout>
                                <SidebarLayout>
                                        <main className="p-4 flex flex-col items-center justify-center [&>*]:w-[76vw] min-h-screen">
                                                <Header />
                                                <div>{children}</div>
                                                <Footer />
                                        </main>
                                </SidebarLayout>
                        </HTMLAndBodyLayout>
                </LangContextProvider.LangProvider>
        );
}
