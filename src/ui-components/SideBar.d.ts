/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767087"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767088"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1162"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767092"?: PrimitiveOverrideProps<FlexProps>;
    Icon29767093?: PrimitiveOverrideProps<ViewProps>;
    Vector29767094?: PrimitiveOverrideProps<IconProps>;
    Dashboard?: PrimitiveOverrideProps<TextProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Frame 32340482695"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40482711?: MyIconProps;
    Activity?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767100"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 413"?: PrimitiveOverrideProps<FlexProps>;
    Office?: PrimitiveOverrideProps<TextProps>;
    "Frame 32329767103"?: PrimitiveOverrideProps<FlexProps>;
    Icon29767104?: PrimitiveOverrideProps<ViewProps>;
    Vector29767105?: PrimitiveOverrideProps<IconProps>;
    Staff?: PrimitiveOverrideProps<TextProps>;
    "Frame 324"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40482707?: MyIconProps;
    Patients?: PrimitiveOverrideProps<TextProps>;
    "Frame 325"?: PrimitiveOverrideProps<FlexProps>;
    Icon29767112?: PrimitiveOverrideProps<ViewProps>;
    Vector29767113?: PrimitiveOverrideProps<IconProps>;
    Appointments?: PrimitiveOverrideProps<TextProps>;
    "Frame 326"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40482705?: MyIconProps;
    Insurance?: PrimitiveOverrideProps<TextProps>;
    "Frame 327"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40482703?: MyIconProps;
    "Medical History"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767135"?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 32129767140"?: PrimitiveOverrideProps<FlexProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    "Sign Out"?: PrimitiveOverrideProps<TextProps>;
    "Icon/settings"?: PrimitiveOverrideProps<ViewProps>;
    Vector29767144?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
