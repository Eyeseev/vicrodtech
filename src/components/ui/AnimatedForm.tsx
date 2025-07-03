import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedFormProps extends HTMLMotionProps<"form"> {
  children: React.ReactNode;
  className?: string;
}

const defaultInitial = { opacity: 0, y: 20 };
const defaultAnimate = { opacity: 1, y: 0 };
const defaultTransition = { duration: 0.7, delay: 0.6 };

const AnimatedForm = React.forwardRef<HTMLFormElement, AnimatedFormProps>(
  (
    {
      children,
      className = "",
      initial = defaultInitial,
      animate = defaultAnimate,
      transition = defaultTransition,
      ...rest
    },
    ref
  ) => (
    <motion.form
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </motion.form>
  )
);
AnimatedForm.displayName = "AnimatedForm";

export default AnimatedForm; 