// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.2"}
      baseProfile={"tiny"}
      viewBox={"0 1.3 256 256"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M127.4 102c15.3 0 27.5-12.2 27.5-27.5S142.7 47 127.4 47 99.9 59.3 99.9 74.5s12.3 27.5 27.5 27.5zm-115 6.2h41.9v41.9H12.4v-41.9zm211.7 0l-20.8 41.9h41.9l-21.1-41.9zm16.7 49.1h-43.1L173 121.2c-7.2-10.3-15.6-14.7-27.2-14.7h-36.7c-11.7 0-20 4.7-27.2 14.7l-24.7 36.1H14.4c-17.2 0-16.4 24.4-.3 24.4h49.4c3.9 0 8.6-1.4 11.4-5.6l18.9-26.9v63.9h67.5v-63.9l18.9 26.9c2.8 4.2 7.5 5.6 11.4 5.6H241c15.9.1 17-24.4-.2-24.4z"
        }
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
