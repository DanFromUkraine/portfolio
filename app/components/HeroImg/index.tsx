import Image from "next/image";
import WorkingOn from "./WorkingOn";
import CubeInDots, { Dot } from "../utils/CubeInDots";

export default function HeroImg() {
    return (
        <section className="flex flex-col items-center relative">
            <Image src="/Hero.png" alt="Hero image" width={457} height={386}/>
            <WorkingOn />
            <CubeInDots xSize="big" ySize="big" className="bottom-20 right-5"/>
        </section>
    );
}
