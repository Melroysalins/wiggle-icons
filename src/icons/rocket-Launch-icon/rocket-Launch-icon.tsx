import { IconProps } from "../../types/icon-type";

export const RocketLaunchIcon = ({
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
      className="rocket-launch-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="rocket-body"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="rocket-window"
        d="M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* flame particles */}
      <circle className="flame-1" cx="7" cy="18" r="0.7" fill={color} stroke="none" opacity="0" />
      <circle className="flame-2" cx="6" cy="19" r="0.5" fill={color} stroke="none" opacity="0" />
      <circle className="flame-3" cx="8" cy="19.5" r="0.4" fill={color} stroke="none" opacity="0" />
      <circle className="flame-4" cx="6.5" cy="17.5" r="0.35" fill={color} stroke="none" opacity="0" />
    </svg>
  );
};