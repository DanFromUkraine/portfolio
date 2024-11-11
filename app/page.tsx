import React from "react";
import HeroSection from "./sections/Hero";
import BlockquoteSection from "./sections/Blockquote";
import ProjectsSection from "./sections/Projects";
import Skills from "./components/skills";
import AboutMe from "./components/AboutMe";

export default function page() {
        return <div>
                <HeroSection />
                <BlockquoteSection />
                <ProjectsSection />
                <Skills />
                <AboutMe />
        </div>;
}
