import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

const defaultInitial = { opacity: 0, y: 40 };
const defaultAnimate = { opacity: 1, y: 0 };
const defaultTransition = { duration: 0.7 };

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  (
    {
      children,
      className = "card",
      initial = defaultInitial,
      animate = defaultAnimate,
      transition = defaultTransition,
      ...rest
    },
    ref
  ) => (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
);
AnimatedCard.displayName = "AnimatedCard";

export default AnimatedCard; 