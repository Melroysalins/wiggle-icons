

import { IconProps } from "../../types/icon-type";

export const ScissorIcon = ({
  size = 24,
  color = "currentColor",
  ...rest
}: IconProps) => {
  return (   
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className="scissor-icon"
      fill="none"
      style={{cursor:'pointer'}}
      {...rest}
    >
      {/* Handle circles */}
      <path d="M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.848 15.75a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Z" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Pivot connectors */}
      <path d="M9.384 9.137 11.461 10.336" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.384 14.863 11.461 13.664" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Upper blade - animates */}
      <path
        className="blade-top"
        d="m11.461 10.336a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lower blade - animates */}
      <path
        className="blade-bottom"
        d="m11.461 13.664 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};




