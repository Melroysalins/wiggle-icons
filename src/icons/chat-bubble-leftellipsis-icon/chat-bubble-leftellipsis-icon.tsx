import { IconProps } from "../../types/icon-type";

export const ChatBubbleLeftEllipsisIcon = ({
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
      className="chat-bubble-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="bubble-outline"
        d="M2.25 6.741c0-1.602 1.123-2.995 2.707-3.228A48.394 48.394 0 0 1 12 3c2.392 0 4.744.175 7.043.513 1.584.233 2.707 1.626 2.707 3.228v6.018c0 1.602-1.123 2.995-2.708 3.228a48.294 48.294 0 0 1-5.83.498 1.14 1.14 0 0 0-.778.332L8.25 21v-4.454c-1.108-.086-2.206-.209-3.293-.369-1.584-.233-2.707-1.626-2.707-3.227V6.741Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        className="dot-one"
        cx="8.25"
        cy="9.75"
        r="1"
        fill={color}
        stroke="none"
      />
      <circle
        className="dot-two"
        cx="12"
        cy="9.75"
        r="1"
        fill={color}
        stroke="none"
      />
      <circle
        className="dot-three"
        cx="15.75"
        cy="9.75"
        r="1"
        fill={color}
        stroke="none"
      />
    </svg>
  );
};