import { simpleCubeSizes } from "@/app/lib/constants/cubeSizes";
import { simpleCubeSizesPropNamesType } from "@/app/lib/definitions";
import clsx from "clsx";

export default function SimpleCube({
    size,
    className = "",
}: {
    size: simpleCubeSizesPropNamesType;
    className?: string;
}) {
    return (
        <span
            className={clsx(
                simpleCubeSizes[size],
                "border border-white absolute",
                className
            )}
        />
    );
}
