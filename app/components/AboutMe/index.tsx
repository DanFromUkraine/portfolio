import ImgSide from "./ImgSide";
import InfoSide from "./InfoSide";

export default function AboutMe() {
  return (
    <section className="my-28 flex justify-between">
      <InfoSide />
      <ImgSide />
    </section>
  );
}
