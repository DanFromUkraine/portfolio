"use client";

import { SECONDARY, SECONDARY_HOVER } from "@/app/lib/constants/colors";
import type { Icon } from "@/app/lib/definitions";
import { useCallback, useState } from "react";

export default function MuiIcon({ MuiIcon }: { MuiIcon: Icon }) {
  const [color, setColor] = useState(SECONDARY);
  const onMouseEnter = useCallback(() => setColor(SECONDARY_HOVER), []),
    onMouseLeave = useCallback(() => setColor(SECONDARY), []);
  return (
    <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <MuiIcon sx={{ color }} />
    </span>
  );
}
