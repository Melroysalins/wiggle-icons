import { IconProps } from "../../types/icon-type";

export const ArrowPointingOutIcon = ({
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
      className="arrow-pointing-out-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="arrow-out-top-left"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="arrow-out-bottom-left"
        d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="arrow-out-top-right"
        d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="arrow-out-bottom-right"
        d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};