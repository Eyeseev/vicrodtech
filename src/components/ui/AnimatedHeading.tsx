import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type AnimatedHeadingProps = HTMLMotionProps<HeadingTag> & {
  children: React.ReactNode;
  as?: HeadingTag;
  className?: string;
};

const defaultInitial = { opacity: 0, y: 30 };
const defaultAnimate = { opacity: 1, y: 0 };
const defaultTransition = { duration: 0.7, delay: 0.2 };

export default function AnimatedHeading({
  children,
  as = "h2",
  className = "",
  initial = defaultInitial,
  animate = defaultAnimate,
  transition = defaultTransition,
  ...rest
}: AnimatedHeadingProps) {
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
} 