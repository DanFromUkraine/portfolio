import Quots from "./Quots";

export default function Blockquote() {
    return (
        <section className="flex flex-col items-end ">
            <div className="gray-border p-8 flex flex-col relative">
                <Quots className="-top-3 left-2.5" />
                <p className="font-medium text-2xl">
                    With great power comes great electricity bill
                </p>
                <Quots className="-bottom-3 right-2.5" />
            </div>
            <p className="gray-border border-t-0 w-fit p-4 text-2xl">
                - Dr. Who
            </p>
        </section>
    );
}
