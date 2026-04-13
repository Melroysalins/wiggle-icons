import { IconProps } from "../../types/icon-type";

export const CursorArrowRaysIcon = ({
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
      className="cursor-arrow-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="cursor-arrow"
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path className="ray-1" d="M12 2.25V4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className="ray-2" d="M17.834 4.666l-1.591 1.591" strokeLinecap="round" strokeLinejoin="round" />
      <path className="ray-3" d="M20.25 10.5H18" strokeLinecap="round" strokeLinejoin="round" />
      <path className="ray-4" d="M7.757 14.743l-1.59 1.59" strokeLinecap="round" strokeLinejoin="round" />
      <path className="ray-5" d="M6 10.5H3.75" strokeLinecap="round" strokeLinejoin="round" />
      <path className="ray-6" d="M4.007 4.757l1.59 1.59" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};