import { IconProps } from "../../types/icon-type";

export const ChevronDoubleLeftIcon = ({
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
      className="chevron-double-left-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="chevron-right"
        d="M18.75 4.5l-7.5 7.5 7.5 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="chevron-left"
        d="M12.75 4.5l-7.5 7.5 7.5 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};