"use client";

import getRandomPositions, {
  resultType,
} from "@/app/lib/utils/getRandomPositions";
import CubeInDots from "../utils/CubeInDots";
import LogoInLines from "../utils/LogoInLines";
import SectionHeading from "../utils/SectionHeading";
import SimpleCube from "../utils/SimpleCube";
import { LegacyRef, useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Heading() {
  const [coords, setCoords] = useState<resultType | null>(null);
  const sectionRef: LegacyRef<HTMLElement> = useRef(null);
  const [sectionWidth, setSectionWidth] = useState(0);

  useEffect(() => {
    setSectionWidth(sectionRef.current?.clientWidth || 0);
    setCoords(
      getRandomPositions({
        contSizeX: sectionWidth,
        contSizeY: 400,
        numOfPos: 5,
        elSize: 84,
      })
    );
  }, [sectionWidth]);

  console.log(sectionWidth);

  return (
    <section className="w-[30vw] h-[400px]" ref={sectionRef}>
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
          className={sectionWidth < 400 ? "!hidden" : ""}
        />
      </div>
    </section>
  );
}
