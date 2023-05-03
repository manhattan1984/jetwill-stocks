// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -1 20 20"}
      version={"1.1"}
      fill={"currentColor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 3V2a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-2 0 1 1 0 00-1-1H5a1 1 0 00-1 1 1 1 0 01-2 0zm10 9a2 2 0 11-3.999.001A2 2 0 0112 12zm6-2.343L16.343 8C17.972 8 18 8.384 18 9.657zM16.343 16L18 14.343C18 15.97 17.62 16 16.343 16zm-9.858 0l-4-4 4-4h7.03l4 4-4 4h-7.03zM2 14.343L3.657 16C2.03 16 2 15.62 2 14.343zM3.657 8L2 9.657C2 8.028 2.384 8 3.657 8zM18 6H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
