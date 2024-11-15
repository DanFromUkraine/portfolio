import clsx from "clsx";
import HashtagLabel from "./SectionLabel";
import PurpleLine from "./PurpleLine";

export default function SectionHeading({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex-1 flex items-center gap-4 whitespace-nowrap",
        className
      )}
    >
      <HashtagLabel className="text-3xl">{children}</HashtagLabel>
      <PurpleLine />
    </div>
  );
}
