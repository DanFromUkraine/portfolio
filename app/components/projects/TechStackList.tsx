import { techStackType } from "@/app/lib/definitions";

export default function TechStackList({
  techStack,
}: {
  techStack: techStackType;
}) {
  return (
    <div className="gray-border border-x-0 p-2 text-secondary flex gap-2 flex-wrap max-w-[330px]">
      {techStack.map((string, i) => (
        <span key={i}>{string}</span>
      ))}
    </div>
  );
}
