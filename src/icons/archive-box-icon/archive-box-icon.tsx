import { IconProps } from "../../types/icon-type";
import "./archive-box-icon.css";

export const ArchiveBoxXMarkIcon = ({
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
      className="archive-box-x-mark-icon"
      style={{ cursor: "pointer" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Box body */}
      <path
        className="box-structure"
        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Box lid */}
      <path
        className="box-lid"
        d="M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* First line of X → draws from top-left to bottom-right (/) */}
      <path
        className="x-mark"
        d="m9.75 11.625 4.5 4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Second line of X → draws from top-right to bottom-left (\) */}
      <path
        className="x-mark"
        d="m14.25 11.625-4.5 4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};