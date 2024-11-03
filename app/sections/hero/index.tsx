import HeroImg from "@/app/components/HeroImg";
import HeroInfo from "@/app/components/HeroInfo";

export default function HeroSection() {
    return (
        <div className="flex justify-between mt-14 items-center">
            <HeroInfo />
            <HeroImg />
        </div>
    );
}
