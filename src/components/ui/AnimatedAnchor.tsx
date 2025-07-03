import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedAnchorProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  className?: string;
}

const defaultInitial = { opacity: 0, scale: 0.95 };
const defaultAnimate = { opacity: 1, scale: 1 };
const defaultTransition = { duration: 0.7 };
const defaultWhileHover = { scale: 1.05 };
const defaultWhileTap = { scale: 0.97 };

const AnimatedAnchor = React.forwardRef<HTMLAnchorElement, AnimatedAnchorProps>(
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
    <motion.a
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      className={className}
      tabIndex={0}
      {...rest}
    >
      {children}
    </motion.a>
  )
);
AnimatedAnchor.displayName = "AnimatedAnchor";

export default AnimatedAnchor; 