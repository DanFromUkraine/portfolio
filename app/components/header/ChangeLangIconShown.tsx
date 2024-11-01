import { SECONDARY } from "@/app/lib/constants/colors";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function IconShown({ isMenuOpened }: { isMenuOpened: boolean }) {
        const output = isMenuOpened ? (
                <ExpandLessIcon sx={{ color: SECONDARY }} />
        ) : (
                <ExpandMoreIcon sx={{ color: SECONDARY }} />
        );
        return output;
}
