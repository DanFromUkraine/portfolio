"use client";

import { RefObject, useEffect, useRef } from "react";

export default function useReadWidth(ref: RefObject<HTMLElement>) {
  const width = useRef(0);
  useEffect(() => {
    width.current = ref.current?.clientWidth || 0;
  }, [ref]);

  return width.current;
}
