import React from "react";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

// Static card wrapper (animation removed for RSC compatibility)

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className = "card", ...rest }, ref) => (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
);
AnimatedCard.displayName = "AnimatedCard";

export default AnimatedCard; 