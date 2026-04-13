import { IconProps } from "../../types/icon-type";

export const RefreshIcon = ({
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
      className="refresh-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="refresh-arc-top"
        d="M16.023 9.348h4.992v-.001m0-4.991v4.99"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="refresh-arc-bottom"
        d="M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};