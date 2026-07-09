"use client";

import { useEffect, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  duration = 1500,
  className = "",
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className={className}>{count}</span>;
}
