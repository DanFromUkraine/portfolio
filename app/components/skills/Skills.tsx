import { skillsType } from "@/app/lib/definitions";
import SkillBox from "./SkillBox";
// import { rows } from "@/app/lib/constants/skills";

export default function SkillsBoxesCont({ skills }: { skills: skillsType }) {
  return (
    <section role="list" className="grid grid-cols-3 grid-rows-2">
      {Object.entries(skills).map(([groupName, skillsArray], i) => (
        <SkillBox
          key={groupName}
          skills={skillsArray}
          heading={groupName}
          className={i === 0 ? "row-span-2" : ""}
        />
      ))}
    </section>
  );
}
