import SectionHeading from "../utils/SectionHeading";
import ViewAll from "./ViewAll";

export default function Heading() {
    return (
        <div className="flex justify-between items-center">
            <SectionHeading>projects</SectionHeading>
            <ViewAll />
        </div>
    );
}
