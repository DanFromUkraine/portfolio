import { LANGUAGES_AVAILABLE } from "../../definitions";

export function getOpositeLang(
        currLang: LANGUAGES_AVAILABLE
): LANGUAGES_AVAILABLE {
        return currLang === "en" ? "ua" : "en";
}
