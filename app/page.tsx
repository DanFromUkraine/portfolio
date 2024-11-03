import React from "react";
import HeroSection from "./sections/hero";
import BlockquoteSection from "./sections/blockquote";
import ProjectsSection from "./sections/projects";

export default function page() {
        return <div>
                <HeroSection />
                <BlockquoteSection />
                <ProjectsSection />
        </div>;
}
