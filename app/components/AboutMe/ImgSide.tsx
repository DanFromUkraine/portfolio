"use client";

import Image from "next/image";
import CubeInDots from "../utils/CubeInDots";
import { useRef } from "react";
import useReadWidth from "@/app/lib/utils/hooks/useWidth";
import { useRandomPositions } from "@/app/lib/utils/hooks/useGetRandomPositions";

export default function ImgSide() {
  const ref = useRef(null);
  const width = useReadWidth(ref);
  const coords = useRandomPositions({
    contSizeX: width,
    contSizeY: 500,
    elSize: 80,
    numOfPos: 2,
  });

  return (
    <section className="relative" ref={ref}>
      <Image src="/AboutMe.png" alt="about-me image" width={340} height={500} />
      <CubeInDots xSize="medium" ySize="big" style={coords?.pos0} />
      <CubeInDots xSize="big" ySize="small" style={coords?.pos1} />
    </section>
  );
}
