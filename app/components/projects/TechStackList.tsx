import { techStackType } from "@/app/lib/definitions";

export default function TechStackList({
  techStack,
}: {
  techStack: techStackType;
}) {
  return (
    <div className="gray-border border-x-0 p-2 text-secondary flex gap-1 flex-wrap">
      {techStack.map((string, i) => (
        <span key={i}>{string}</span>
      ))}
    </div>
  );
}
