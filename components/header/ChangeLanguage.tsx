"use client";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import clsx from "clsx";
import { useCallback, useState } from "react";
import { SECONDARY } from "../constants/colors";

function useMenuOpened() {
        const [isMenuOpened, setIsMenuOpened] = useState(false);
        const toggleIsMenuOpened = useCallback(
                () => setIsMenuOpened((prev) => !prev),
                []
        );
        return [isMenuOpened, toggleIsMenuOpened] as const;
}

function IconShown({ isMenuOpened }: { isMenuOpened: boolean }) {
        const output = isMenuOpened ? (
                <ExpandLessIcon sx={{ color: SECONDARY }} />
        ) : (
                <ExpandMoreIcon sx={{ color: SECONDARY }} />
        );
        return output;
}

function getOpositeLang(currLang: string) {
        return currLang === "EN" ? "UA" : "EN";
}

export default function ChangeLanguage() {
        const [currLang, setCurrLang] = useState("EN");
        const [isMenuOpened, toggleIsMenuOpened] = useMenuOpened();

        const toggleCurrLang = useCallback(() => {
                setCurrLang((prev) => getOpositeLang(prev));
        }, []);

        return (
                <section
                        className="flex flex-col items-center justify-center relative w-11"
                        onClick={toggleIsMenuOpened}
                >
                        <span className="flex">
                                <span className="font-semibold"> {currLang}</span>
                                <IconShown isMenuOpened={isMenuOpened} />
                        </span>
                        <span
                                onClick={toggleCurrLang}
                                className={clsx(
                                        { hidden: !isMenuOpened },
                                        "w-full"
                                )}
                        >
                                <span className="border-secondary border absolute p-2">
                                        {getOpositeLang(currLang)}
                                </span>
                        </span>
                </section>
        );
}
