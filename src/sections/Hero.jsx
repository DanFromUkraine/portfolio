import hero from "../constants/hero";
const { Hero_svg, soc_med_icons } = hero;

const Hero = () => {
  return (
    <section className="mt-16 flex w-full items-center justify-start">
      <div className="">
        <h1 className="w-[600px] text-5xl leading-[66px]">
          Hello, <br /> I&apos;m{" "}
          <span className="font-extrabold">Ovsyannikov Danil.</span> <br />{" "}
          <span className="font-extrabold">Frontend </span>{" "}
          <span className="text-outline text-white">Developer</span> <br />{" "}
          Based in <span className="font-extrabold">Ukraine</span>
        </h1>
        <p className="py-8 text-[#71717A]">{hero.paragraph}</p>
        <ul>
          {soc_med_icons.map(({ Img, href }) => {
            return (
              <span className="" key={href}>
                <Img />
              </span>
            );
          })}
        </ul>
      </div>
      <div className="h-auto w-full">
        <div className="relative left-[-198px]">
          <Hero_svg />
        </div>
      </div>
    </section>
  );
};

export default Hero;
