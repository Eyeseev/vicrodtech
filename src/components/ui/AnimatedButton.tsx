import React from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className = "", ...rest }, ref) => (
    <button
      ref={ref}
      className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
);
AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;