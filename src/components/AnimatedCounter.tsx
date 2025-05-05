"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number; // thoi gian chay so (ms)
  suffix?: string; // don vi dang sau so target (htai de %)
  isVisible: boolean; // kiem tra khi nao den section Resume moi hien animate number counter 
};

const AnimatedCounter = ({
  target,
  duration = 2000,
  suffix = "%",
  isVisible,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    let rafId: number;

    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        rafId = requestAnimationFrame(step);
      } else {
        setCount(target);
        cancelAnimationFrame(rafId);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
