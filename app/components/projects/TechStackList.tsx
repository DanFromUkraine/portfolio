import { techStackType } from "@/app/lib/definitions";
import TechStackItem from "./TechStackItem";

export default function TechStackList({
    techStack,
}: {
    techStack: techStackType;
}) {
    return (
        <ul className="flex gray-border text-secondary border-x-0 p-2 gap-2">
            {techStack.map((techStackItem) => (
                <TechStackItem
                    key={techStackItem}
                    techStackItem={techStackItem}
                />
            ))}
        </ul>
    );
}
