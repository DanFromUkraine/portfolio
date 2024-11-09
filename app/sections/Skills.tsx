"use client"

import React from "react";
// import Skills from "../components/skills";
import dynamic from "next/dynamic";

export default function SkillsSection() {
    const NoSSRSkills = dynamic(() => import("../components/skills"), {ssr: false})
    return <NoSSRSkills />
}
