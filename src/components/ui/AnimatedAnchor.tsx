import React from "react";

interface AnimatedAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedAnchor = React.forwardRef<HTMLAnchorElement, AnimatedAnchorProps>(
  ({ children, className = "", ...rest }, ref) => (
    <a
      ref={ref}
      className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
);
AnimatedAnchor.displayName = "AnimatedAnchor";

export default AnimatedAnchor; 