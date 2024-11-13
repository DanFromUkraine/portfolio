"use client"

import Image from "next/image";
import WorkingOn from "./WorkingOn";
import CubeInDots from "../../utils/CubeInDots";
import { useRandomPositions } from "@/app/lib/utils/hooks/useGetRandomPositions";
import useReadWidth from "@/app/lib/utils/hooks/useWidth";
import { useRef } from "react";

export default function HeroImg() {
  const ref = useRef(null);
  const width = useReadWidth(ref);

  const coords = useRandomPositions({
    contSizeX: width,
    contSizeY: 360,
    elSize: 84,
    numOfPos: 1,
  });
  return (
    <section className="flex flex-col items-center relative" ref={ref}>
      <Image
        src="/Hero.png"
        alt="Hero image"
        width={457}
        height={386}
        priority
      />
      <WorkingOn />
      <CubeInDots
        xSize="big"
        ySize="big"
        className="bottom-20 right-5"
        style={coords?.pos0}
      />
    </section>
  );
}
