import React from "react";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export const IntegrationIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={`w-6 h-6 text-brand-purple-1000 ${className}`.trim()}
    {...props}
  >
    <path d="m8 6 4-4 4 4" />
    <path d="M12 2v14a4 4 0 0 0-4 4H4" />
    <path d="M12 10.5a4 4 0 0 1 4 4H20" />
  </svg>
);

export const ResultIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={`w-6 h-6 text-brand-purple-1000 ${className}`.trim()}
    {...props}
  >
    <path d="M12 2v20" />
    <path d="m17 5-5-3-5 3" />
    <path d="m22 17-10 5-10-5" />
    <path d="m17 17-5-3-5 3" />
  </svg>
);

export const FacultyIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={`w-6 h-6 text-brand-purple-1000 ${className}`.trim()}
    {...props}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

export const MentorshipIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={`w-6 h-6 text-brand-purple-1000 ${className}`.trim()}
    {...props}
  >
    <circle cx="9" cy="7" r="4" />
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const CareerIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={`w-6 h-6 text-brand-purple-1000 ${className}`.trim()}
    {...props}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const SupportIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={`w-6 h-6 text-brand-purple-1000 ${className}`.trim()}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);