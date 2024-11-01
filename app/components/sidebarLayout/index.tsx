import React, { ReactNode } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function SidebarLayout({ children }: { children: ReactNode }) {
        return (
                <div className="flex w-screen justify-between px-4">
                        <LeftSidebar />
                        {children}
                        <RightSidebar />
                </div>
        );
}
