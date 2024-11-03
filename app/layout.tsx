import React, { ReactNode } from "react";

import "./globals.css";
import HTMLAndBodyLayout from "./components/HTML&bodyLayout";
import { LangContextProvider } from "./lib/context";
import SidebarLayout from "./components/sidebarLayout";
import Main from "./components/Main";

export default function layout({
        children,
}: Readonly<{ children: ReactNode }>) {
        return (
                <LangContextProvider.LangProvider>
                        <HTMLAndBodyLayout>
                                <SidebarLayout>
                                        <Main>{children}</Main>
                                </SidebarLayout>
                        </HTMLAndBodyLayout>
                </LangContextProvider.LangProvider>
        );
}
