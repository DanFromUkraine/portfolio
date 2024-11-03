import { ReactNode } from "react";

export default function PurpleText({ children }: { children: ReactNode }) {
    return <span className="text-purple">{children}</span>;
}
