import { PROJECTS_LIST } from "@/app/lib/constants/projects";
import Heading from "./Heading";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  return (
    <section className="my-28 flex flex-col gap-14">
      <Heading />
      <ProjectsList projectList={PROJECTS_LIST}/>
    </section>
  )
}
