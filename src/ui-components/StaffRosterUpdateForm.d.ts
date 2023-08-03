/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StaffRoster } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StaffRosterUpdateFormInputValues = {
    start_date?: string;
    end_date?: string;
    on_duty?: boolean;
};
export declare type StaffRosterUpdateFormValidationValues = {
    start_date?: ValidationFunction<string>;
    end_date?: ValidationFunction<string>;
    on_duty?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StaffRosterUpdateFormOverridesProps = {
    StaffRosterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
    end_date?: PrimitiveOverrideProps<TextFieldProps>;
    on_duty?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type StaffRosterUpdateFormProps = React.PropsWithChildren<{
    overrides?: StaffRosterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    staffRoster?: StaffRoster;
    onSubmit?: (fields: StaffRosterUpdateFormInputValues) => StaffRosterUpdateFormInputValues;
    onSuccess?: (fields: StaffRosterUpdateFormInputValues) => void;
    onError?: (fields: StaffRosterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StaffRosterUpdateFormInputValues) => StaffRosterUpdateFormInputValues;
    onValidate?: StaffRosterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StaffRosterUpdateForm(props: StaffRosterUpdateFormProps): React.ReactElement;
