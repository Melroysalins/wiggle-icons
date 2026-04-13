import { IconProps } from "../../types/icon-type";

export const AtSignIcon = ({
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
      className="at-sign-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="at-circle"
        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="at-tail"
        d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};