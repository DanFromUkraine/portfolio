import { skillsType } from "@/app/lib/definitions";
import SkillBox from "./SkillBox";
// import { rows } from "@/app/lib/constants/skills";

export default function SkillsBoxesCont({ skills }: { skills: skillsType[] }) {
  return (
    <section role="list" className="flex w-full h-fit max-w-[584px]">
      {skills.map((skillBoxes, i) => (
        <div key={i} className="flex flex-col w-full">
          {Object.entries(skillBoxes).map(([groupName, skillsArray]) => (
            <SkillBox
              key={groupName}
              skills={skillsArray}
              heading={groupName}
              className="w-11/12"
            />
          ))}
        </div>
      ))}
    </section>
  );
}
