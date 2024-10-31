import React from "react";
import { fira } from "./lib/fonts";
import clsx from "clsx";
import Header from "@/components/header";
import "./globals.css"

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className="bg-main_bg text-white">
        <Header />
        <div className={clsx(fira.className)}>{children}</div>
      </body>
    </html>
  );
}
