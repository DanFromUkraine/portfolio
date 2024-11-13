import React from "react";
import HeroSection from "./sections/Hero";
import BlockquoteSection from "./sections/Blockquote";
import ProjectsSection from "./sections/Projects";

import ContactsSection from "./sections/Contacts";
import AboutMeSection from "./sections/AboutMe";
import SkillsSection from "./sections/Skills";

export default function page() {
        return <div>
                <HeroSection />
                <BlockquoteSection />
                <ProjectsSection />
                <SkillsSection />
                <AboutMeSection />
                <ContactsSection />
        </div>;
}
