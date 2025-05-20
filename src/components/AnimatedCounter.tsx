"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  endValue: number;
  isVisible: boolean;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

const AnimatedCounter = ({
  endValue,
  isVisible,
  duration = 2000,
  prefix = "",
  suffix = "%",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Reset when not visible
    if (!isVisible) {
      setCount(0);
      setHasAnimated(false);
      return;
    }

    // Don't re-animate if already animated and still visible
    if (hasAnimated && isVisible) return;

    // Animation logic
    let current = 0;
    const increment = endValue / (duration / 16); // ~60fps
    let rafId: number;

    const step = () => {
      current += increment;
      if (current < endValue) {
        setCount(Math.floor(current));
        rafId = requestAnimationFrame(step);
      } else {
        setCount(endValue);
        setHasAnimated(true);
        cancelAnimationFrame(rafId);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, endValue, duration, hasAnimated]);

  return (
    <span >
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
