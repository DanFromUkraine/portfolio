import Info from "./Info";
import Media from "./Media";

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between border-t border-t-secondary pt-8 mt-28">
      <Info />
      <Media />
    </footer>
  );
}
