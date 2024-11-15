"use client";
import { Lang } from "@/app/lib/context/LangContext/lang";
import { enterHandler } from "@/app/lib/utils/keyboardHandlers";
import { getOpositeLang } from "@/app/lib/utils/language";
import clsx from "clsx";
import React, { useCallback, useContext } from "react";

export default function AlternativeLanguage({
  isMenuOpened,
  toggleIsMenuOpened,
}: {
  isMenuOpened: boolean;
  toggleIsMenuOpened: () => void;
}) {
  const { language, toggleLanguage } = useContext(Lang);
  const onClick = useCallback(() => {
    toggleLanguage();
    toggleIsMenuOpened();
  }, []);
  return (
    <button
      onClick={onClick}
      onKeyDown={enterHandler(toggleLanguage)}
      className={clsx({ hidden: !isMenuOpened }, "w-full flex justify-start")}
    >
      <span className="gray-border absolute p-2">
        {getOpositeLang(language).toLocaleUpperCase()}
      </span>
    </button>
  );
}
