import clsx from "clsx";

export default function Cube({ visible }: { visible: boolean }) {
  return (
    <>
      <span
        className={clsx("cube-item", "w-1 h-1 bg-white opacity-0", {
          "invisible": !visible,
        })}
      />
    </>
  );
}
