"use client"

import Image from "next/image";
import CubeInDots from "../utils/CubeInDots";
import { useState } from "react";

export default function ImgSide() {
    
    const [] = useState(null);

  return (
    <section className="relative">
      <Image src="/AboutMe.png" alt="about-me image" width={340} height={500} />
      <CubeInDots xSize="medium" ySize="big" />
      <CubeInDots xSize="big" ySize="small" />
    </section>
  );
}
