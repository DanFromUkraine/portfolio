import header from "../constants/header";
import s from "./styles/nav.module.scss";

const {
  logo: { Logo_svg, label },
  nav,
  download_btn,
  download_btn: { Download_svg },
} = header;

const Nav = () => {
  console.log(s.load_btn);
  return (
    <header className="w-full h-10 flex center justify-between py-10 mx-5 items-center">
      <a id="logo" href="/" className="flex min-w-fit gap-3 items-center">
        <Logo_svg />
        {label}
      </a>

      <nav className="max-md:gap-16 ">
        <ul id="nav" className="gap-8 h-fit max-tt:grid-cols-fit_2 max-md:grid-cols-fit_4 max-xs:grid-cols-fit_1   max-md:hidden md:!flex">
          {nav.map(({ label, href }) => {
            return (
              <li key={label} className="w-fit">
                <a href={href}>{label}</a>
              </li>
            );
          })}
        </ul>
        <ul className="md:hidden space-y-1 h-fit relative burger min-w-7 min-h-5">
          <input
            type="checkbox"
            name=""
            id=""
            className="absolute w-full h-full opacity-0 peer z-10"
            onChange={() => {
              const nav_ul = document.querySelector("#nav"),
                    nav_gen = document.querySelector("nav"),
                    logo = document.querySelector("#logo"),
                    header = document.querySelector("header");
              nav_ul?.classList.toggle("!grid");
              nav_gen?.classList.toggle("!flex");
              nav_gen?.classList.toggle("max-tt:mt-14");
              logo?.classList.toggle("max-sm:hidden")
              header?.classList.toggle("max-xs:h-fit")
              header?.classList.toggle("pt-0")
            }}
          />
          <li className="peer-checked:top_burg_li"></li>
          <li className="peer-checked:hidden"></li>
          <li className="peer-checked:bottom_burg_li"></li>
        </ul>
      </nav>

      <div
        className={`flex bg-black px-5 py-4 text-white gap-2 items-center max-md:hidden`}
      >
        <span>{download_btn.label}</span>
        <Download_svg />
      </div>
    </header>
  );
};

export default Nav;
