import React from "react";

interface AnimatedParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedParagraph({
  children,
  className = "",
  ...rest
}: AnimatedParagraphProps) {
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
}