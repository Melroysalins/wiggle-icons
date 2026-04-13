import { IconProps } from "../../types/icon-type";

export const FaceSmileIcon = ({
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
      className="face-smile-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="face-circle"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="face-mouth"
        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="face-eye-left"
        d="M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="face-eye-right"
        d="M14.625 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};