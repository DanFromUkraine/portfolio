import { GridCols, GridRows } from "@/app/lib/constants/cubeSizes";
import {
    AvailableGridColsSizes,
    AvailableGridRowsSizes,
} from "@/app/lib/definitions";
import clsx from "clsx";

function Dot() {
    return <span className="w-1 h-1 rounded-full !bg-white " />;
}

export default function CubeInDots({
    xSize,
    ySize,
}: {
    xSize: AvailableGridColsSizes;
    ySize: AvailableGridRowsSizes;
}) {
    const colsObj = GridCols[xSize];
    const rowsObj = GridRows[ySize];
    const amountOfDots = colsObj.numb * rowsObj.numb;

    console.log(new Array(amountOfDots).length);

    return (
        <div className={clsx("grid", colsObj.class, rowsObj.class, "gap-4")}>
            {new Array(amountOfDots).fill(null).map((_, i) => (
                <Dot key={i} />
            ))}
        </div>
    );
}
