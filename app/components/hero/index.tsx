import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";

export default function Hero() {
    return (
        <div className="flex justify-between mt-14 items-center">
            <HeroInfo />
            <HeroImg />
        </div>
    );
}
