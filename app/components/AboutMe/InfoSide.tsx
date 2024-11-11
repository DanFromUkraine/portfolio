import Button from "../utils/Button";
import SectionHeading from "../utils/SectionHeading";

export default function InfoSide() {
  return (
    <section className="[&>p]:text-secondary max-w-[560px] flex flex-col gap-6">
      <SectionHeading>about-me</SectionHeading>
      <p>Hello, i’m Elias!</p>
      <p>
        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
        develop responsive websites from scratch and raise them into modern
        user-friendly web experiences.
      </p>
      <p>
        Transforming my creativity and knowledge into a websites has been my
        passion for over a year. I have been helping various clients to
        establish their presence online. I always strive to learn about the
        newest technologies and frameworks.
      </p>
      <Button>Read more -{">"}</Button>
    </section>
  );
}
