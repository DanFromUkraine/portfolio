import type { ProjectType } from "@/app/lib/definitions";
import Image from "next/image";
import TechStackList from "./TechStackList";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ButtonLive from "./ButtonLive";

export default function Project({
    project: { title, description, techStack, imageUrl, githubUrl },
}: {
    project: ProjectType;
}) {
    return (
        <div className="flex flex-col gray-border">
            <Image
                src={imageUrl}
                alt="project image"
                width={330}
                height={200}
            />
            <TechStackList techStack={techStack} />

            <div className="p-4 flex flex-col gap-4">
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <ButtonLive githubUrl={githubUrl} />
            </div>
        </div>
    );
}
