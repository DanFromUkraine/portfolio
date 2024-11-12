import type { randomPosArgs, stylePosType } from "../definitions";

export type resultType = { [key: string]: { left: string; top: string } };

function px(num: number) {
  return `${num}px`;
}

export function getRandomPositions({
  contSizeX,
  contSizeY,
  numOfPos,
  elSize,
}: randomPosArgs) {
  const positionsTaken: stylePosType[] = [];
  const maxAttempts = numOfPos * 10; // Increase attempts to avoid infinite loops
  let attempts = 0;

  function isOverlapping(newPos: stylePosType) {
    return positionsTaken.some(({ left, top }) => {
      const distance = Math.sqrt(
        Math.pow(newPos.left - left, 2) + Math.pow(newPos.top - top, 2)
      );
      return distance <= elSize;
    });
  }

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  while (positionsTaken.length < numOfPos && attempts < maxAttempts) {
    const left = getRandomNumber(0, contSizeX - elSize);
    const top = getRandomNumber(0, contSizeY - elSize);
    const newPos: stylePosType = {
      left: left + elSize / 2,
      top: top + elSize / 2,
    };

    if (!isOverlapping(newPos)) {
      positionsTaken.push(newPos);
    }
    attempts++;
  }

  const result: resultType = positionsTaken.reduce((acc, { left, top }, i) => {
    return { ...acc, [`pos${i}`]: { left: px(left), top: px(top) } };
  }, {});

  return result;
}
