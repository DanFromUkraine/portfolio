import clsx from "clsx";
import { CSSProperties } from "react";

export default function LogoInLines({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={clsx("flex absolute", className)} style={style}>
      <span className="border border-purple w-[26px] flex justify-end items-center h-[39px] mt-[14px]">
        <span className="border border-purple w-[13px] h-[13px] border-r-0" />
      </span>
      <span className="border border-purple w-[26px] flex justify-start items-center h-[39px]">
        <span className="border border-purple w-[13px] h-[13px] border-l-0" />
      </span>
    </div>
  );
}
