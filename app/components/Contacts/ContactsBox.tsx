import Bold from "../utils/Bold";
import Email from "../utils/Email";

export default function ContactsBox() {
  return (
    <div className="flex flex-col gap-4 gray-border p-4">
      <Bold>Message me here</Bold>
      <div className="flex flex-col gap-2">
        <Email />
        <Email />
      </div>
    </div>
  );
}
