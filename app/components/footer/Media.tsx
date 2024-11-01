import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import HoverLinkIcon from "../utils/HoverLinkIcon";

export default function Media() {
        return (
                <section className="flex flex-col gap-3">
                        <h2>Media</h2>
                        <ul className="flex gap-2">
                                <li role="link">
                                        <HoverLinkIcon href="https://github.com/DanFromUkraine" Icon={GitHubIcon} />
                                </li>
                                <li role="link">
                                        <HoverLinkIcon href="" Icon={TelegramIcon} />
                                </li>
                        </ul>
                </section>
        );
}
