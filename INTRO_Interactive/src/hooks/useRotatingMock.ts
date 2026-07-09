import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useRotatingMock(length: number, intervalMs = 3200) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, length, reducedMotion]);

  return index;
}
