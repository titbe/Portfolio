"use client";

import { useEffect, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

type SkillProgressProps = {
  label: string;
  percentage: number;
  color?: string;
  isVisible: boolean;
  duration?: number;
};

const SkillProgress = ({
  label,
  percentage,
  color = "#4CAF50",
  isVisible,
  duration = 2000,
}: SkillProgressProps) => {
  const [width, setWidth] = useState(0);
  // Track if animation has completed to prevent re-animation during section switches
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Reset animations when visibility changes to false (leaving viewport)
    if (!isVisible) {
      setWidth(0);
      setHasAnimated(false);
      return;
    }

    // If already animated and still visible, don't re-animate
    if (hasAnimated && isVisible) return;

    // Animate progress bar - make sure it also animates on section changes
    const timeout = setTimeout(() => {
      setWidth(percentage);
      setHasAnimated(true);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible, percentage, duration, hasAnimated]);

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center mb-1">
        <p className="text-lg">{label}</p>
        <span className="italic text-sm text-[rgb(5,99,187)]">
          <AnimatedCounter
            endValue={percentage}
            isVisible={isVisible}
            duration={duration}
          />
        </span>
      </div>
      <div className="w-full bg-[#ddd] rounded-full overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-in-out"
          style={{
            width: `${width}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
