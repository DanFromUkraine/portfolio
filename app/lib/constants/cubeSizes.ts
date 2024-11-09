import type { simpleCubeSizesInfoType } from "../definitions";
import { GridColsType, GridRowsType } from "../definitions";

export const GridCols: GridColsType = {
    small: {
        numb: 3,
        class: "grid-cols-3",
    },
    medium: {
        // only the gap is different
        numb: 5,
        class: "grid-cols-5",
    },
    big: {
        numb: 5,
        class: "grid-cols-5",
    },
};

export const GridRows: GridRowsType = {
    small: {
        numb: 3,
        class: "grid-rows-3",
    },
    medium: {
        numb: 4,
        class: "grid-rows-4",
    },
    big: {
        numb: 5,
        class: "grid-rows-5",
    },
};

export const simpleCubeSizes: simpleCubeSizesInfoType = {
    // sizes are in the tailindcss.config.ts
    big: "w-big-simp-cube h-big-simp-cube",
    middle: "w-mid-simp-cube h-mid-simp-cube",
    small: "w-sm-simp-cube h-sm-simp-cube",
};
