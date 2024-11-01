import { GitHub } from "@mui/icons-material";

export type LinkType = {
        href: string;
        label: string;
};

export type LANGUAGES_AVAILABLE = "en" | "ua";

export type LangProviderValueType = {
        language: LANGUAGES_AVAILABLE;
        toggleLanguage: () => void;
};


export type Icon = typeof GitHub;
