

import { IconProps } from "../../types/icon-type";

export const ArrowRightLeftIcon = ({
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
  className="swap-icon"
style={{ cursor: 'pointer' }}
overflow="visible"
  fill="none"
>
  <path
    className="arrow-left-down"
    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    className="arrow-right-up"
    d="M16.5 3 21 7.5m0 0L16.5 12M21 7.5H7.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
  );
};






