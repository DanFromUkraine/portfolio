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
        <CubeInDots
          xSize="medium"
          ySize="big"
          style={{ left: coords?.pos1.x, top: coords?.pos1.y }}
        />

        <SimpleCube
          size="middle"
          style={{ left: coords?.pos0.x, top: coords?.pos0?.y }}
        />
        <LogoInLines style={{ left: coords?.pos4?.x, top: coords?.pos4?.y }} />
        <CubeInDots
          xSize="medium"
          ySize="big"
          style={{ left: coords?.pos2?.x, top: coords?.pos2?.y }}
        />
        <SimpleCube
          size="small"
          style={{ left: coords?.pos3?.x, top: coords?.pos3?.y }}
          className={width < 400 ? "!hidden" : ""}
        />
      </div>
    </section>
  );
}
