"use client";

import { useEffect, useState } from "react";
import { getRandomPositions, resultType } from "../getRandomPositions";
import { randomPosArgs } from "../../definitions";

export function useRandomPositions(args: randomPosArgs) {
  const [coords, setCoords] = useState<resultType | null>(null);

  useEffect(() => {
    setCoords(getRandomPositions(args));
  }, [args.contSizeX]);

  return coords;
}
