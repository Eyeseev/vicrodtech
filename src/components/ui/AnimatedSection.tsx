import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

const defaultInitial = { opacity: 0, y: 40 };
const defaultAnimate = { opacity: 1, y: 0 };
const defaultTransition = { duration: 0.7 };

export default function AnimatedSection({
  children,
  className = "",
  initial = defaultInitial,
  animate = defaultAnimate,
  transition = defaultTransition,
  ...rest
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
} 