"use client";

import clsx from "clsx";
import { useCallback, useContext, useState } from "react";
import { LangContextProvider } from "@/app/lib/context";
import { LangProviderValueType } from "@/app/lib/definitions";
import { getOpositeLang } from "@/app/lib/utils/language";
import IconShown from "./ChangeLangIconShown";

function useMenuOpened() {
        const [isMenuOpened, setIsMenuOpened] = useState(false);
        const toggleIsMenuOpened = useCallback(
                () => setIsMenuOpened((prev) => !prev),
                []
        );
        return [isMenuOpened, toggleIsMenuOpened] as const;
}

export default function ChangeLanguage() {
        const [isMenuOpened, toggleIsMenuOpened] = useMenuOpened();
        const { Lang } = LangContextProvider;
        const { language, toggleLanguage }: LangProviderValueType =
                useContext(Lang);

        return (
                <section
                        className="flex flex-col items-center justify-center relative w-11"
                        onClick={toggleIsMenuOpened}
                >
                        <span className="flex">
                                <span className="font-semibold">
                                        {language.toLocaleUpperCase()}
                                </span>
                                <IconShown isMenuOpened={isMenuOpened} />
                        </span>
                        <span
                                onClick={toggleLanguage}
                                className={clsx(
                                        { hidden: !isMenuOpened },
                                        "w-full"
                                )}
                        >
                                <span className="border-secondary border absolute p-2">
                                        {getOpositeLang(language).toLocaleUpperCase()}
                                </span>
                        </span>
                </section>
        );
}
