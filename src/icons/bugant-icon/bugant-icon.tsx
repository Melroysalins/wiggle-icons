import { IconProps } from "../../types/icon-type";

export const BugAntIcon = ({
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
      className="bug-ant-icon"
      style={{ cursor: 'pointer' }}
      fill="none"
      overflow="visible"
    >
      <path
        className="bug-body"
        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-legs-left"
        d="M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-legs-right"
        d="M12 12.75c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-middle"
        d="M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-head"
        d="M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-antennae-left"
        d="M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-antennae-right"
        d="M15.318 5c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-arms-left"
        d="M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bug-arms-right"
        d="M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};