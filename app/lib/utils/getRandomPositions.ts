
export default function getRandomPositions({
      containerSizeX,
      containerSizeY,
      numberOfElements,
      elementSize // expects that all elements are squares
}: {
      containerSizeX: number;
      containerSizeY: number;
      numberOfElements: number;
      elementSize: number;
}) {
      const result = [];
      const takenPositions = [];
      let elementsLeft = numberOfElements;

      do {
            const x = Math.random() * containerSizeX;
            const y = Math.random() * containerSizeY
      } while(elementsLeft !== 0)

}