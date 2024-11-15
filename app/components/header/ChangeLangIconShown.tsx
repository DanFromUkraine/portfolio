import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiIcon from "../utils/MuiIcon";

export default function IconShown({ isMenuOpened }: { isMenuOpened: boolean }) {
  return <MuiIcon MuiIcon={isMenuOpened ? ExpandLessIcon : ExpandMoreIcon} />;
}
