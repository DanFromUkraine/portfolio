import BlockLine from "../../utils/BlockLine";
import Button from "../../utils/Button";
import PurpleText from "../../utils/PurpleText";

export default function HeroInfo() {
    return (
        <section className="flex flex-col gap-8">
            <h2 className="font-semibold text-3xl">
                <BlockLine>
                    Elias is a <PurpleText>web designer</PurpleText> and
                </BlockLine>
                <BlockLine>
                    <PurpleText>front-end developer</PurpleText>
                </BlockLine>
            </h2>
            <p className="text-secondary">
                He crafts responsive websites where technologies meet creativity
            </p>
            <Button>Contact me!!!</Button>
        </section>
    );
}
