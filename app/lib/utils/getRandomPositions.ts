import type { positionType, randomPosArgs } from "../definitions";

export type resultType = { [key: string]: { x: string; y: string } };

function px(num: number) {
  return `${num}px`;
}

export function getRandomPositions({
  contSizeX,
  contSizeY,
  numOfPos,
  elSize,
}: randomPosArgs) {
  const positionsTaken: positionType[] = [];
  const maxAttempts = numOfPos * 10; // Increase attempts to avoid infinite loops
  let attempts = 0;

  function isOverlapping(newPos: positionType) {
    return positionsTaken.some(({ x, y }) => {
      const distance = Math.sqrt(
        Math.pow(newPos.x - x, 2) + Math.pow(newPos.y - y, 2)
      );
      return distance <= elSize;
    });
  }

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  while (positionsTaken.length < numOfPos && attempts < maxAttempts) {
    const x = getRandomNumber(0, contSizeX - elSize);
    const y = getRandomNumber(0, contSizeY - elSize);
    const newPos: positionType = { x: x + elSize / 2, y: y + elSize / 2 };

    if (!isOverlapping(newPos)) {
      positionsTaken.push(newPos);
    }
    attempts++;
  }

  const result: resultType = positionsTaken.reduce((acc, { x, y }, i) => {
    return { ...acc, [`pos${i}`]: { x: px(x), y: px(y) } };
  }, {});

  return result;
}
