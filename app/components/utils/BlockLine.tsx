import { ReactNode } from "react";

export default function BlockLine({ children }: { children: ReactNode }) {
    return <span className="block">{children}</span>;
}
