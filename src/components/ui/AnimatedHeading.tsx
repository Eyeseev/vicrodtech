import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type AnimatedHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  as?: HeadingTag;
  className?: string;
};

export default function AnimatedHeading({
  children,
  as = "h2",
  className = "",
  ...rest
}: AnimatedHeadingProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
}