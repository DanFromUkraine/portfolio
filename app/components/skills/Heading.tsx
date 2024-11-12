"use client";

import { useRandomPositions } from "@/app/lib/utils/hooks/useGetRandomPositions";
import CubeInDots from "../utils/CubeInDots";
import LogoInLines from "../utils/LogoInLines";
import SectionHeading from "../utils/SectionHeading";
import SimpleCube from "../utils/SimpleCube";
import { RefObject, useRef } from "react";
import useReadWidth from "@/app/lib/utils/hooks/useWidth";

export default function Heading() {
  const ref: RefObject<HTMLElement> = useRef(null);

  const width = useReadWidth(ref);
  const coords = useRandomPositions({
    contSizeX: width || 0,
    contSizeY: 400,
    numOfPos: 5,
    elSize: 84,
  });

  return (
    <section className="w-[30vw] h-[400px]" ref={ref}>
      <SectionHeading>Skills</SectionHeading>
      <div className="ml-8 mt-3 w-full mr-2.5 relative">
        <CubeInDots xSize="medium" ySize="big" style={coords?.pos0} />

        <SimpleCube size="middle" style={coords?.pos1} />
        <LogoInLines style={coords?.pos2} />
        <CubeInDots xSize="medium" ySize="big" style={coords?.pos3} />
        <SimpleCube
          size="small"
          style={coords?.pos4}
          className={width < 400 ? "!hidden" : ""}
        />
      </div>
    </section>
  );
}
