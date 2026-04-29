import { IconProps } from "../../types/icon-type";
import "./arrow-turn-left-down-icon.css";

export const ArrowTurnLeftDownIcon = ({
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
      className="arrow-turn-left-down-icon"
      style={{ cursor: "pointer" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arrow head — always visible, no animation */}
      <path
        className="arrow-head"
        d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Path reversed: starts from right end → goes left → then down to arrow */}
      <path
        className="arrow-path"
        d="M19.49 3.75H8.24V20.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};