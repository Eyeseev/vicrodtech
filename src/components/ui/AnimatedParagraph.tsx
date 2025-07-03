import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedParagraphProps extends HTMLMotionProps<"p"> {
  children: React.ReactNode;
  className?: string;
}

const defaultInitial = { opacity: 0, y: 20 };
const defaultAnimate = { opacity: 1, y: 0 };
const defaultTransition = { duration: 0.7, delay: 0.4 };

export default function AnimatedParagraph({
  children,
  className = "",
  initial = defaultInitial,
  animate = defaultAnimate,
  transition = defaultTransition,
  ...rest
}: AnimatedParagraphProps) {
  return (
    <motion.p
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </motion.p>
  );
} 