import { GitHub } from "@mui/icons-material";

export type Icon = typeof GitHub;

export type LinkType = {
        href: string;
        label: string;
};

export type MediaLinkType = {
        Icon: Icon;
        href: string;
        id: number;
}

export type LANGUAGES_AVAILABLE = "en" | "ua";

export type LangProviderValueType = {
        language: LANGUAGES_AVAILABLE;
        toggleLanguage: () => void;
};


export type AvailableGridColsSizes = "small" | "big";
export type AvailableGridRowsSizes = "small" | "medium" | "big";

export type sizePropValue = {
    numb: number;
    class: string;
};

export type GridColsType = Record<AvailableGridColsSizes, sizePropValue>;
export type GridRowsType = Record<AvailableGridRowsSizes, sizePropValue>;