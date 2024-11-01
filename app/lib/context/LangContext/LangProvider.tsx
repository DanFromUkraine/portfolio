"use client"
import { LANGUAGE_BY_DEFAULT } from "../../constants/languageOptions";
import { LangProviderValueType, LANGUAGES_AVAILABLE } from "../../definitions";
import { getOpositeLang } from "../../utils/language";
import { Lang } from "./lang";

import React, { ReactNode, useCallback, useState } from "react";

export default function LangProvider({ children }: { children: ReactNode }) {
        const [language, setLanguage] =
                useState<LANGUAGES_AVAILABLE>(LANGUAGE_BY_DEFAULT);
        const toggleLanguage = useCallback(
                () => setLanguage((prev) => getOpositeLang(prev)),
                []
        );
        const value: LangProviderValueType = {language, toggleLanguage}
        return <Lang.Provider value={value}>{children}</Lang.Provider>;
}
