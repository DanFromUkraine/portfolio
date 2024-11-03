"use client";

import { GridCols, GridRows } from "@/app/lib/constants/cubeSizes";
import {
    AvailableGridColsSizes,
    AvailableGridRowsSizes,
} from "@/app/lib/definitions";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect } from "react";

function Dot() {
    return <span className="cube w-1 h-1 rounded-full !bg-white opacity-0" />;
}

export default function CubeInDots({
    xSize,
    ySize,
    className,
}: {
    xSize: AvailableGridColsSizes;
    ySize: AvailableGridRowsSizes;
    className?: string;
}) {
    const colsObj = GridCols[xSize];
    const rowsObj = GridRows[ySize];
    const amountOfDots = colsObj.numb * rowsObj.numb;

    useEffect(() => {
        const timeout = setTimeout(() => {
            const tl = gsap.timeline();
            tl.from(".cube", {
                opacity: 0,
            }).to(".cube", {
                opacity: 1,
                duration: 0.3,
                stagger: {
                    from: "random",
                    grid: "auto",
                    each: 0.1,
                    repeat: 0.1,
                },
            });
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div
            className={clsx(
                className,
                colsObj.class,
                rowsObj.class,
                "grid gap-4 absolute  w-fit h-fit"
            )}
            
        >
            {new Array(amountOfDots).fill(null).map((_, i) => (
                <Dot key={i} />
            ))}
        </div>
    );
}
