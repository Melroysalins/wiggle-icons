

import { IconProps } from "../../types/icon-type";




export const ShoppingBag = ({
  size = 24,
  color = "currentColor",
  badge = 0,
  badgeColor = "grey",
  badgeFont = "14px",
  badgeFontColor = "black",
  ...rest
}: IconProps) => {

  const totalQuantity = badge > 99 ? `${99}` : badge

  const badgeSize = size * 0.55;
  const badgeFontSize = badgeSize * 0.5;
  

  return (
    <div style={{position:'relative' , display:'inline-block'}} className="icon-wrapper">
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={1.5}
        {...rest}
       className="icon-svg"
    >
      <path
         d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" 
        strokeLinecap="round"
        strokeLinejoin="round"     
      />
      </svg>
      {badge > 0 && <span  className="badge"  style={{ position: 'absolute',top:'0', right:'0', transform:'translate(40%, -40%)' ,background:badgeColor , width:badgeSize , height:badgeSize , borderRadius:'50%' , fontSize:badgeFontSize,display: 'flex',alignItems: 'center',justifyContent: 'center' ,color :badgeFontColor , boxShadow:'0 0 0 2px white',cursor:'pointer'}}>{ totalQuantity}</span>}
      </div>
  );
};
