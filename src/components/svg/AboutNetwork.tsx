import React from "react";

const AboutNetwork: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="auto"
    aria-hidden="true"
    {...props}
  >
    {/* Network lines */}
    <g stroke="#1c398e" strokeWidth="1.5">
      <line x1="20" y1="30" x2="60" y2="10" />
      <line x1="60" y1="10" x2="100" y2="30" />
      <line x1="20" y1="30" x2="60" y2="50" />
      <line x1="60" y1="50" x2="100" y2="30" />
      <line x1="60" y1="10" x2="60" y2="50" />
    </g>
    {/* Network nodes */}
    <circle cx="20" cy="30" r="4" fill="#1c398e" />
    <circle cx="60" cy="10" r="4" fill="#1c398e" />
    <circle cx="100" cy="30" r="4" fill="#1c398e" />
    <circle cx="60" cy="50" r="4" fill="#1c398e" />
  </svg>
);

export default AboutNetwork; 