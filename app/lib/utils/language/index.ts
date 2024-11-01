import { LANGUAGES_AVAILABLE } from "../../definitions";

export function getOpositeLang(
        currLang: LANGUAGES_AVAILABLE
): LANGUAGES_AVAILABLE {
        return currLang === "en" ? "ua" : "en";
}

export function changeUaToUkOrJustReturn(lang: LANGUAGES_AVAILABLE): string { // change ua to uk or just return
        return lang === "ua" ? "uk" : lang;
}
