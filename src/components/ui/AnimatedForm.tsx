import React from "react";

interface AnimatedFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedForm = React.forwardRef<HTMLFormElement, AnimatedFormProps>(
  (
    {
      children,
      className = "",
      ...rest
    },
    ref
  ) => (
    <form
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </form>
  )
);
AnimatedForm.displayName = "AnimatedForm";

export default AnimatedForm; 