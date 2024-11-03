import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

export default function Main({ children }: { children: ReactNode }) {
        return (
                <main className="p-4 flex flex-col items-center justify-center [&>*]:w-[76vw] min-h-screen">
                        <Header />
                        {children}
                        <Footer />
                </main>
        );
}
