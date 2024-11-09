"use client";
import { Lang } from "@/app/lib/context/LangContext/lang";
import { enterHandler } from "@/app/lib/utils/keyboardHandlers";
import { getOpositeLang } from "@/app/lib/utils/language";
import clsx from "clsx";
import React, { useContext } from "react";

export default function AlternativeLanguage({
  isMenuOpened,
}: {
  isMenuOpened: boolean;
}) {
  const { language, toggleLanguage } = useContext(Lang);
  return (
    <button
      onClick={toggleLanguage}
      onKeyDown={enterHandler(toggleLanguage)}
      className={clsx({ hidden: !isMenuOpened }, "w-full")}
    >
      <span className="gray-border absolute p-2">
        {getOpositeLang(language).toLocaleUpperCase()}
      </span>
    </button>
  );
}
