// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neRJon4mvg761ap1WNmssZ
// Component: 5c-bjdNt25XYd-

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantssihYh5ETgBO3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sihYH5ETgB_o_3/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_jetwill_stocks.module.css"; // plasmic-import: neRJon4mvg761ap1WNmssZ/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: 5c-bjdNt25XYd-/css

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  color:
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "blueBorder"
    | "footerButton"
    | "navLinkBlue"
    | "blueSmall"
    | "blueBorderSmall";
  iconOnly: "iconOnly";
  large: "large";
  isDisabled: "isDisabled";
};
export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  color?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "blueBorder"
    | "footerButton"
    | "navLinkBlue"
    | "blueSmall"
    | "blueBorderSmall"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  large?: SingleBooleanChoiceArg<"large">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "large",
  "isDisabled"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  color?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "blueBorder"
    | "footerButton"
    | "navLinkBlue"
    | "blueSmall"
    | "blueBorderSmall"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  large?: SingleBooleanChoiceArg<"large">;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconOnly
      },
      {
        path: "large",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.large
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssihYh5ETgBO3()
  });

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_blueBorderSmall]: hasVariant(
            $state,
            "color",
            "blueBorderSmall"
          ),
          [sty.rootcolor_blueSmall]: hasVariant($state, "color", "blueSmall"),
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_darkGray]: hasVariant($state, "color", "darkGray"),
          [sty.rootcolor_footerButton]: hasVariant(
            $state,
            "color",
            "footerButton"
          ),
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_indigo]: hasVariant($state, "color", "indigo"),
          [sty.rootcolor_navLinkBlue]: hasVariant(
            $state,
            "color",
            "navLinkBlue"
          ),
          [sty.rootcolor_navLink]: hasVariant($state, "color", "navLink"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rooticonOnly]: hasVariant($state, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootlarge]: hasVariant($state, "large", "large"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
    >
      {(hasVariant($state, "iconOnly", "iconOnly") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrencolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetChildrencolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetChildrencolor_footerButton]: hasVariant(
                $state,
                "color",
                "footerButton"
              ),
              [sty.slotTargetChildrencolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetChildrencolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetChildrencolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetChildrencolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetChildrencolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetChildrencolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetChildreniconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetChildrenisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildrenlarge]: hasVariant(
                $state,
                "large",
                "large"
              ),
              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant($state, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant($state, "iconOnly", "iconOnly")
          ? false
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__zzl)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetEndIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetEndIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetEndIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetEndIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetEndIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetEndIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetEndIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant($state, "color", "blue")
          ? false
          : hasVariant($state, "iconOnly", "iconOnly")
          ? true
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__efNo)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetStartIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetStartIconcolor_green_showEndIcon]:
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green"),
              [sty.slotTargetStartIconcolor_green_showEndIcon_showStartIcon]:
                hasVariant($state, "showStartIcon", "showStartIcon") &&
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green"),
              [sty.slotTargetStartIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetStartIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetStartIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetStartIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetStartIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
