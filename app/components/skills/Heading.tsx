"use client";

import getRandomPositions, {
  resultType,
} from "@/app/lib/utils/getRandomPositions";
import CubeInDots from "../utils/CubeInDots";
import LogoInLines from "../utils/LogoInLines";
import SectionHeading from "../utils/SectionHeading";
import SimpleCube from "../utils/SimpleCube";
import { useEffect, useState } from "react";

export default function Heading() {
  const [coords, setCoords] = useState<resultType | null>(null);

  useEffect(() => {
    setCoords(
      getRandomPositions({
        contSizeX: 391,
        contSizeY: 290,
        numOfPos: 5,
        elSize: 90,
      })
    );
  }, []);


  return (
    <section className="w-[391px] ">
      <SectionHeading>Skills</SectionHeading>
      <div className="ml-8 mt-3 w-full h-[289px] mr-2.5 relative">
        <CubeInDots
          xSize="medium"
          ySize="big"
          style={{ left: coords?.pos1.x, top: coords?.pos1.y }}
        />

        <SimpleCube
          size="middle"
          style={{ left: coords?.pos3.x, top: coords?.pos3.y }}
        />
        <LogoInLines style={{ left: coords?.pos4.x, top: coords?.pos4.y }} />
        <CubeInDots
          xSize="medium"
          ySize="big"
          style={{ left: coords?.pos2.x, top: coords?.pos2.y }}
        />
        <SimpleCube
          size="small"
          style={{ left: coords?.pos3.x, top: coords?.pos3.y }}
        />
      </div>
    </section>
  );
}
