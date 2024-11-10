"use client";

import { SKILLS } from "@/app/lib/constants/skills";
import Heading from "./Heading";
import SkillsBoxesCont from "./Skills";

export default function Skills() {
  return (
    <section className="flex justify-between">
      <Heading />
      <SkillsBoxesCont skills={SKILLS} />
    </section>
  );
}
