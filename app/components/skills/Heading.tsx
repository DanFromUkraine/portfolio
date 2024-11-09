"use client";

import getRandomPositions, {
  positionsTakenType,
} from "@/app/lib/utils/getRandomPositions";
import CubeInDots from "../utils/CubeInDots";
import LogoInLines from "../utils/LogoInLines";
import SectionHeading from "../utils/SectionHeading";
import SimpleCube from "../utils/SimpleCube";
import {  useState } from "react";

export default function Heading() {
  const [coords, setCoords] = useState<positionsTakenType>();

  useState(() => {
    setCoords(
      getRandomPositions({
        contSizeX: 391,
        contSizeY: 391,
        numOfPos: 5,
        elSize: 84,
      })
    );
  });

  return (
    <section className="w-[391px] ">
      <SectionHeading>Skills</SectionHeading>
      <div className="ml-8 mt-3 w-full h-[289px] mr-2.5 relative">
        <CubeInDots
          xSize="medium"
          ySize="big"
          style={{ left: coords?.pos1.x, top: coords?.pos1.y }}
        />

        <SimpleCube size="middle" className="top-0 right-11" />
        <LogoInLines className="bottom-[29px]" />
        <CubeInDots
          xSize="medium"
          ySize="big"
          //   className="bottom-[70px] right-[100px]"
          style={{ left: coords?.pos2.x, top: coords?.pos2.y }}
        />
        <SimpleCube size="small" className="bottom-0 right-0" />
      </div>
    </section>
  );
}
