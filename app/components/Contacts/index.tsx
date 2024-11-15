import SectionHeading from "../utils/SectionHeading";
import Info from "./Info";

export default function Contacts() {
  return (
    <section className="flex flex-col gap-10 my-28">
      <SectionHeading className="max-w-[317px]">contacts</SectionHeading>
      <Info />
    </section>
  );
}
