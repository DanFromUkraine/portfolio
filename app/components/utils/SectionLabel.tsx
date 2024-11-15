import clsx from "clsx";
import React from "react";

export default function SectionLabel({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={"flex items-center group"}>
      <span className={clsx(className, "!text-purple")}>#</span>
      <span className={clsx(className, "group-hover:text-secondary_hover")}>
        {children}
      </span>
    </span>
  );
}
