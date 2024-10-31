import React from "react";

export default function HashtagLabel({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return <span className={className}>
    <span>#</span>
    <span>{children}</span>
  </span>;
}
