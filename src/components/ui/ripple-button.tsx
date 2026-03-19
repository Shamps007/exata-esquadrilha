"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  duration?: number;
}

export const RippleButton = React.forwardRef<
  HTMLButtonElement,
  RippleButtonProps
>(
  (
    {
      className,
      children,
      rippleColor = "rgba(255, 255, 255, 0.3)",
      duration = 600,
      onClick,
      ...props
    },
    ref
  ) => {
    const [buttonRipples, setButtonRipples] = useState<
      Array<{ x: number; y: number; size: number; key: number }>
    >([]);

    useEffect(() => {
      if (buttonRipples.length > 0) {
        const timeout = setTimeout(() => {
          setButtonRipples([]);
        }, duration);
        return () => clearTimeout(timeout);
      }
    }, [buttonRipples, duration]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple = {
        x,
        y,
        size,
        key: Date.now(),
      };

      setButtonRipples((prevRipples) => [...prevRipples, newRipple]);
      if (onClick) onClick(e);
    };

    return (
      <button
        className={cn(
          "relative overflow-hidden rounded-lg bg-amber-500 px-6 py-3 font-semibold text-zinc-950 shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] transition-all hover:scale-105 active:scale-95",
          className
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>
        {buttonRipples.map((ripple) => (
          <span
            key={ripple.key}
            className="absolute animate-ripple rounded-full pointer-events-none"
            style={{
              width: ripple.size,
              height: ripple.size,
              top: ripple.y,
              left: ripple.x,
              backgroundColor: rippleColor,
              animationDuration: `${duration}ms`,
            }}
          />
        ))}
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";
