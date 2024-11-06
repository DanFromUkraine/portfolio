import getRandomPositions from "@/app/lib/utils/getRandomPositions";
import CubeInDots from "../utils/CubeInDots";
import LogoInLines from "../utils/LogoInLines";
import SectionHeading from "../utils/SectionHeading";
import SimpleCube from "../utils/SimpleCube";



export default function Heading() {
    console.log(
        getRandomPositions({
            containerSizeX: 500,
            containerSizeY: 500,
            numberOfElements: 5,
            elementSize: 100,
        })
    );
    return (
        <section className="w-[391px] ">
            <SectionHeading>Skills</SectionHeading>
            <div className="ml-8 mt-3 w-full h-[289px] mr-2.5 relative">
                <CubeInDots
                    xSize="medium"
                    ySize="big"
                    className="top-10 left-8"
                />

                <SimpleCube size="middle" className="top-0 right-11" />
                <LogoInLines className="bottom-[29px]" />
                <CubeInDots
                    xSize="medium"
                    ySize="big"
                    className="bottom-[70px] right-[100px]"
                />
                <SimpleCube size="small" className="bottom-0 right-0" />
            </div>
        </section>
    );
}
