import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import HoverLinkIcon from "../utils/HoverLinkIcon";

export default function Media() {
  return (
    <section className="flex flex-col gap-3">
      <h2>Media</h2>
      <div role="list" className="flex gap-2">
        <HoverLinkIcon
          href="https://github.com/DanFromUkraine"
          Icon={GitHubIcon}
        />
        <HoverLinkIcon href="https://t.me/DanFromUkraine" Icon={TelegramIcon} />
      </div>
    </section>
  );
}
