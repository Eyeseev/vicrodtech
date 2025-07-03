import React from "react";

const ProjectsStack: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="auto"
    aria-hidden="true"
    {...props}
  >
    {/* Stacked panels */}
    <g stroke="#1c398e" strokeWidth="2">
      <rect x="10" y="30" width="80" height="20" rx="4" />
      <rect x="20" y="20" width="80" height="20" rx="4" />
      <rect x="30" y="10" width="80" height="20" rx="4" />
    </g>
    {/* Accent circles */}
    <circle cx="30" cy="40" r="3" fill="#1c398e" />
    <circle cx="90" cy="20" r="3" fill="#1c398e" />
  </svg>
);

export default ProjectsStack; 