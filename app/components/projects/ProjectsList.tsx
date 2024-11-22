import Project from "./Project";
import type { ProjectType } from "@/app/lib/definitions";

export default function ProjectsList({
  projectList,
}: {
  projectList: ProjectType[];
}) {
  return (
    <div className="flex gap-4" role="listbox">
      {projectList.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  );
}
