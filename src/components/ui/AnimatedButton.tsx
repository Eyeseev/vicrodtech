import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const defaultInitial = { opacity: 0, scale: 0.95 };
const defaultAnimate = { opacity: 1, scale: 1 };
const defaultTransition = { duration: 0.7 };
const defaultWhileHover = { scale: 1.05 };
const defaultWhileTap = { scale: 0.97 };

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children,
      className = "",
      initial = defaultInitial,
      animate = defaultAnimate,
      transition = defaultTransition,
      whileHover = defaultWhileHover,
      whileTap = defaultWhileTap,
      ...rest
    },
    ref
  ) => (
    <motion.button
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      tabIndex={0}
      {...rest}
    >
      {children}
    </motion.button>
  )
);
AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton; 