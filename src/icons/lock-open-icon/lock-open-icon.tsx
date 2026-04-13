import { IconProps } from "../../types/icon-type";

export const LockOpenIcon = ({
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
      className="lock-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="lock-shackle"
        d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="lock-body"
        d="M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};