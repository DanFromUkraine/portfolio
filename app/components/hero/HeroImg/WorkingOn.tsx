import React from "react";
import PurpleCube from "./PurpleCube";
import Bold from "../../utils/Bold";

export default function WorkingOn() {
    return (
        <section className="flex gap-2.5 p-2 gray-border items-center w-full max-w-[402px] relative -left-2">
            <PurpleCube />
            <p>
                Currently working on <Bold>Portfolio</Bold>
            </p>
        </section>
    );
}
