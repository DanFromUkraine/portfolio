import React, { ReactNode } from "react";

import "./globals.css";
import { LangContextProvider } from "./lib/context";
import SidebarLayout from "./components/sidebarLayout";
import Main from "./components/Main";

export default function layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <LangContextProvider.LangProvider>
      <SidebarLayout>
        <Main>{children}</Main>
      </SidebarLayout>
    </LangContextProvider.LangProvider>
  );
}
