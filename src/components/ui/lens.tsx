"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  position?: {
    x: number;
    y: number;
  };
  isStatic?: boolean;
  isHovering?: boolean;
  hovering?: boolean;
  setHovering?: (hovering: boolean) => void;
}

export const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 1.5,
  lensSize = 170,
  isStatic = false,
  position = { x: 200, y: 150 },
  hovering,
  setHovering,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [localIsHovering, setLocalIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });

  const isHoveringState = hovering !== undefined ? hovering : localIsHovering;
  const setIsHoveringState = setHovering || setLocalIsHovering;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg z-20"
      onMouseEnter={() => setIsHoveringState(true)}
      onMouseLeave={() => setIsHoveringState(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isStatic || isHoveringState ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.58 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: `radial-gradient(circle ${lensSize / 2}px at ${
              isStatic ? position.x : mousePosition.x
            }px ${isStatic ? position.y : mousePosition.y}px, black 100%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${
              isStatic ? position.x : mousePosition.x
            }px ${isStatic ? position.y : mousePosition.y}px, black 100%, transparent 100%)`,
            transformOrigin: `${isStatic ? position.x : mousePosition.x}px ${
              isStatic ? position.y : mousePosition.y
            }px`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(${zoomFactor})`,
              transformOrigin: `${isStatic ? position.x : mousePosition.x}px ${
                isStatic ? position.y : mousePosition.y
              }px`,
            }}
          >
            {children}
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};
