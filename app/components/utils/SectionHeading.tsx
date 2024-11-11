import HashtagLabel from "./#label";
import PurpleLine from "./PurpleLine";

export default function SectionHeading({ children }: { children: string }) {
    return (
        <div className="flex-1 flex items-center gap-4 whitespace-nowrap">
            <HashtagLabel className="text-3xl">{children}</HashtagLabel>
            <PurpleLine />
        </div>
    );
}
