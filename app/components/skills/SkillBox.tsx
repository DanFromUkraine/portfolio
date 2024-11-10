import clsx from "clsx";
import SkillBoxHeading from "./SkillBoxHeading";

export default function SkillBox({
  heading,
  skills,
  className,
}: {
  heading: string;
  skills: string[];
  className?: string;
}) {
  return (
    <div className={clsx("gray-border m-4 h-fit", className)}>
      <SkillBoxHeading>{heading}</SkillBoxHeading>
      <span className="bg-secondary !w-full h-[1px] flex" />
      <div className="flex flex-wrap gap-2 text-secondary p-2">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
