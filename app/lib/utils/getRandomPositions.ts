"use client";

import { positionType } from "../definitions";

export type positionsTakenType = Record<string, positionType>;

export default function getRandomPositions({
  contSizeX,
  contSizeY,
  numOfPos,
  elSize,
}: {
  contSizeX: number;
  contSizeY: number;
  numOfPos: number;
  elSize: number;
}): positionsTakenType {
  const positionsTaken: positionsTakenType = {};
  const maxAttempts = numOfPos * 10; // Increase attempts to avoid infinite loops
  let attempts = 0;
  let successFullAttempts = 0;

  function isOverlapping(newPos: positionType) {
    return Object.values(positionsTaken).some(({ x, y }) => {
      const distance = Math.sqrt(
        Math.pow(newPos.x - x, 2) + Math.pow(newPos.y - y, 2)
      );
      return distance <= elSize;
    });
  }

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  while (
    Object.keys(positionsTaken).length < numOfPos &&
    attempts < maxAttempts
  ) {
    const x = getRandomNumber(0, contSizeX - elSize);
    const y = getRandomNumber(0, contSizeY - elSize);
    const newPos: positionType = { x: x + elSize / 2, y: y + elSize / 2 };

    if (!isOverlapping(newPos)) {
      positionsTaken["pos" + successFullAttempts] = newPos;

      successFullAttempts++;
    }
    attempts++;
  }

  return positionsTaken;
}
