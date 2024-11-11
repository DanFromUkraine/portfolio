"use client";

import { useEffect, useState } from "react";
import { getRandomPositions, resultType } from "../getRandomPositions";
import { randomPosArgs } from "../../definitions";

export function useRandomPositions(args: randomPosArgs) {
  const [coords, setCoords] = useState<resultType | null>(null);

  console.log({ args });


  useEffect(() => {
    setCoords(getRandomPositions(args));
  }, [args]);

  return coords;
}
