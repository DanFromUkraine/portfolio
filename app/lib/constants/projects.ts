import { ProjectType } from "../definitions";

export const PROJECTS_LIST: ProjectType[] = [
  {
    title: "calendar",
    description: "some longer description",
    imageUrl: "/calendar.png",
    techStack: [
      "React",
      "Vite",
      "Tailwindcss",
      "React-router-dom",
      "Firebase",
      "MUI Material",
    ],
    githubUrl: "https://github.com/DanFromUkraine/calendar",
  },
  {
    title: "calendar2",
    description: "some longer description",
    imageUrl: "/placeholder.png",
    techStack: ["a", "b", "c", "d"],
    githubUrl: "",
  },
  {
    title: "calendar3",
    description: "some longer description",
    imageUrl: "/placeholder.png",
    techStack: ["a", "b", "c", "d"],
    githubUrl: "",
  },
];
