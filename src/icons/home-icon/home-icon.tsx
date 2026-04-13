

import { IconProps } from "../../types/icon-type";

export const HomeIcon = ({
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
      className="home-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
    >
       <path
    className="house-structure"
    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75M14.25 21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
    strokeLinecap="round"
    strokeLinejoin="round"
      />
       <path
    className="door"
    d="M9.75 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
    </svg>
  );
};






