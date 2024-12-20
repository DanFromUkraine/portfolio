"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { CUBE_VARIATION1, CUBE_VARIATION2 } from "../../lib/constants/logo";
import Cube from "./Cube";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function useOutput() {
    const [output, setOutput] = useState<ReactNode[]>([]);

    const fillUpOutput = useCallback((variation: boolean[]) => {
        setOutput([]);
        setOutput(
            variation.map((isVisible, i) => (
                <Cube key={i} visible={isVisible} />
            ))
        );
    }, []);

    return [output, fillUpOutput] as const;
}

function useVariation() {
    const [variation, setVariation] = useState(CUBE_VARIATION1);

    const toggleVariation = useCallback(() => {
        setVariation((prev) =>
            prev === CUBE_VARIATION1 ? CUBE_VARIATION2 : CUBE_VARIATION1
        );
    }, []);

    return [variation, toggleVariation] as const;
}

export default function RenderCubes() {
    const [variation, toggleVariation] = useVariation();
    const [output, fillUpOutput] = useOutput();

    useEffect(() => {
        fillUpOutput(variation);
        const interval = setInterval(() => {
            toggleVariation();
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [fillUpOutput, toggleVariation, variation]);

    return <GSAPcubeAnimationWrapper>{output}</GSAPcubeAnimationWrapper>;
}

function GSAPcubeAnimationWrapper({
    children: output,
}: {
    children: ReactNode[];
}) {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.killTweensOf(".cube-item");
            gsap.to(".cube-item", {
                opacity: 1,
                stagger: 0.1,
                duration: 0.1,
            });
        },
        {
            dependencies: [output],
            revertOnUpdate: true,
        }
    );

    return (
        <span ref={container} className="grid grid-cols-4 w-4 h-4">
            {output}
        </span>
    );
}
