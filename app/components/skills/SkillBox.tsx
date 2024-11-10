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
    <div className={clsx("gray-border m-4 h-fit p-2", className)}>
      <SkillBoxHeading>{heading}</SkillBoxHeading>
      <span className="" />
      <div className="block">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
