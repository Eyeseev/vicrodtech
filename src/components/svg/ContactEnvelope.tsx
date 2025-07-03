import React from "react";

const ContactEnvelope: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 64 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="auto"
    aria-hidden="true"
    {...props}
  >
    <rect x="4" y="8" width="56" height="24" rx="4" stroke="#1c398e" strokeWidth="2" />
    <polyline points="4,8 32,28 60,8" stroke="#1c398e" strokeWidth="2" fill="none" />
  </svg>
);

export default ContactEnvelope; 