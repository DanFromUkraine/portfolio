"use client";
import React, { useContext } from "react";
import IconShown from "./ChangeLangIconShown";
import { Lang } from "@/app/lib/context/LangContext/lang";

export default function ToggleMenuOpened({
  isMenuOpened,
  toggleIsMenuOpened,
}: {
  isMenuOpened: boolean;
  toggleIsMenuOpened: () => void;
}) {
  const { language } = useContext(Lang);
  return (
    <button className="flex" onClick={toggleIsMenuOpened} tabIndex={0}>
      <span className="font-semibold">{language.toLocaleUpperCase()}</span>
      <IconShown isMenuOpened={isMenuOpened} />
    </button>
  );
}
