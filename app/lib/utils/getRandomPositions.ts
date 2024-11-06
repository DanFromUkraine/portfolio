import { positionType } from "../definitions";

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getEntityBordersPos(elementSize: number, xORy: number) {
    return {
        start: xORy + elementSize / 2,
        end: xORy + elementSize / 2,
    };
}

function isNumberNotInInterval(
    desiredNum: number,
    { start, end }: { start: number; end: number }
) {
    return desiredNum < start || desiredNum > end;
}

function isPosNotAlreadyTaken(
    takenPositions: positionType[],
    desiredX: number,
    desiredY: number
) {
    takenPositions.every(({ x, y }) => {
        const xBorders = getEntityBordersPos(x);
        const yBorders = getEntityBordersPos(y);

        return (
            isNumberNotInInterval(desiredX, xBorders) &&
            isNumberNotInInterval(desiredY, yBorders)
        );
    });
}

export default function getRandomPositions({
    containerSizeX,
    containerSizeY,
    numberOfElements,
    elementSize, // In our case all elements are squars for simplicity
}: {
    containerSizeX: number;
    containerSizeY: number;
    numberOfElements: number;
    elementSize: number;
}) {
    const takenPositions: positionType[] = [];
    let elementsLeft = numberOfElements;
    let cyclesCounter = 0;

    const getRandomX = () =>
        getRandomNumber(elementSize / 2, containerSizeX - elementSize / 2);

    const getRandomY = () =>
        getRandomNumber(elementSize / 2, containerSizeY - elementSize / 2);

    while (elementsLeft !== 0) {
        const randomX = getRandomX(),
            randomY = getRandomY();

        ++cyclesCounter;

        if (cyclesCounter > 150) {
            return takenPositions;
        }

        if (isPosNotAlreadyTaken(randomX, randomY)) {
            takenPositions.push({ x: randomX, y: randomY });
        } else {
            continue;
        }

        cyclesCounter = 0;
        elementsLeft--;
    }

    return takenPositions;
}
