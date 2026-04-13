import { IconProps } from "../../types/icon-type";
import "./arrow-trending-down-icon.css";

export const ArrowTrendingDownIcon = ({
  size = 24,
  color = "currentColor",
  badge = 0,
  badgeColor = "grey",
  badgeFont = "14px",
  badgeFontColor = "black",
  ...rest
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      fill="none"
      className="arrow-trending-down-icon"
      style={{ cursor: "pointer" }}
      {...rest}
    >
      <path
        className="arrow-path"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
      />
    </svg>
  );
};