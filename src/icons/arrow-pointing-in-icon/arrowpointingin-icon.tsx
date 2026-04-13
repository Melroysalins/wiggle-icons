import { IconProps } from "../../types/icon-type";

export const ArrowPointingInIcon = ({
  size = 24,
  color = "currentColor",
  ...rest
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={1.5}
      {...rest}
      className="expand-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="arrow-top-left"
        d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="arrow-bottom-left"
        d="M9 15v4.5M9 15H4.5M9 15l-5.25 5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="arrow-top-right"
        d="M15 9h4.5M15 9V4.5M15 9l5.25-5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="arrow-bottom-right"
        d="M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};