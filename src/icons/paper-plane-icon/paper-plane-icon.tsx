import { IconProps } from "../../types/icon-type";

export const PaperPlaneIcon = ({
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
      className="paper-plane-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="plane-body"
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* smoke particles */}
      <circle className="smoke-1" cx="4" cy="12" r="1" fill={color} stroke="none" opacity="0" />
      <circle className="smoke-2" cx="3" cy="11" r="1" fill={color} stroke="none" opacity="0" />
      <circle className="smoke-3" cx="2.5" cy="12.8" r="1" fill={color} stroke="none" opacity="0" />
      <circle className="smoke-4" cx="2" cy="11.5" r="1" fill={color} stroke="none" opacity="0" />
    </svg>
  );
};