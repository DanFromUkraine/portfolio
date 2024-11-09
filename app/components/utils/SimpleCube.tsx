import { simpleCubeSizes } from "@/app/lib/constants/cubeSizes";
import { simpleCubeSizesPropNamesType } from "@/app/lib/definitions";
import clsx from "clsx";
import { CSSProperties } from "react";

export default function SimpleCube({
  size,
  className = "",
  style,
}: {
  size: simpleCubeSizesPropNamesType;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={clsx(
        simpleCubeSizes[size],
        "border border-white absolute",
        className
      )}
      style={style}
    />
  );
}
