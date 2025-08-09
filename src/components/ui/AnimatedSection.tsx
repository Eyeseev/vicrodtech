import React from "react";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  ...rest
}: AnimatedSectionProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}