import { IconProps } from "../../types/icon-type";
import "./adjustment-vertical-icon.css"

export const AdjustmentsVerticalIcon = ({
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
      className="adjustments-vertical-icon"
      style={{ cursor: "pointer" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
   
      {/* Left line */}
      <line
        className="left-track"
        x1="6" y1="3.75" x2="6" y2="20.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className="adj-knob-left">
        <circle cx="6" cy="13.5" r="1.5" fill="white" stroke={color} strokeWidth={1.5} />
      </g>

      {/* Middle line */}
      <line
        className="middle-track"
        x1="12" y1="3.75" x2="12" y2="20.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className="adj-knob-middle">
        <circle cx="12" cy="7.5" r="1.5" fill="white" stroke={color} strokeWidth={1.5} />
      </g>

      {/* Right line */}
      <line
        className="right-track"
        x1="18" y1="3.75" x2="18" y2="20.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className="adj-knob-right">
        <circle cx="18" cy="13.5" r="1.5" fill="white" stroke={color} strokeWidth={1.5} />
      </g>
    </svg>
  );
};