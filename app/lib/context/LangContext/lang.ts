"use client";
import { createContext } from "react";
import { LangProviderValueType } from "../../definitions";
import { LANGUAGE_BY_DEFAULT } from "../../constants/languageOptions";

export const Lang = createContext<LangProviderValueType>({
        language: LANGUAGE_BY_DEFAULT,
        toggleLanguage: () => {
                throw new Error(
                        "used default toggle language function created in Lang context"
                );
        },
});
