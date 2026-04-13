import { IconProps } from "../../types/icon-type";

export const HashtagIcon = ({
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
      className="hashtag-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="hash-vertical-left"
        d="M8.55 3 4.65 22.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="hash-vertical-right"
        d="M13.35 3l-3.9 19.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="hash-horizontal-top"
        d="M5.25 8.25h15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="hash-horizontal-bottom"
        d="M3.75 15.75h15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};