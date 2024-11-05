import clsx from "clsx";

export default function LogoInLines({ className }: { className?: string }) {
    return (
        <div className={clsx("flex absolute", className)}>
            <span className="border border-purple w-[26px] flex justify-end items-center h-[39px] mt-[14px]">
                <span className="border border-purple w-[13px] h-[13px] border-r-0" />
            </span>
            <span className="border border-purple w-[26px] flex justify-start items-center h-[39px]">
                <span className="border border-purple w-[13px] h-[13px] border-l-0" />
            </span>
        </div>
    );
}
