"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  fullWidth = false,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  fullWidth?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getHiddenState = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 };
      case "down": return { opacity: 0, y: -40 };
      case "left": return { opacity: 0, x: 40 };
      case "right": return { opacity: 0, x: -40 };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getHiddenState()}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : getHiddenState()}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(fullWidth ? "w-full" : "", className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className = "",
  delayOrder = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delayOrder?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delayOrder,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
