

import { IconProps } from "../../types/icon-type";




export const ShoppingCartIcon = ({
  size = 24,
  color = "currentColor",
  badge = 0,
  badgeColor = "grey",
  badgeFont = "14px",
  badgeFontColor="black",
  ...rest
}: IconProps) => {



  return (
   <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
     className="shopping-cart-icon"
        fill="none"
      style={{cursor:'pointer'}}
      {...rest}
    >
      <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
};
