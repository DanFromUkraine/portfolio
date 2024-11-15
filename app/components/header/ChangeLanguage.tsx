"use client";

import { useState } from "react";
import ToggleMenuOpened from "./ToggleMenuOpened";
import AlternativeLanguage from "./AlternativeLanguage";

function useMenuOpened() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleIsMenuOpened = () => setIsMenuOpened((prev) => !prev);

  return [isMenuOpened, toggleIsMenuOpened] as const;
}

export default function ChangeLanguage() {
  const [isMenuOpened, toggleIsMenuOpened] = useMenuOpened();

  return (
    <section className="flex flex-col  relative w-11">
      <ToggleMenuOpened
        isMenuOpened={isMenuOpened}
        toggleIsMenuOpened={toggleIsMenuOpened}
      />
      <AlternativeLanguage isMenuOpened={isMenuOpened} toggleIsMenuOpened={toggleIsMenuOpened}/>
    </section>
  );
}
