/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Staff } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StaffUpdateFormInputValues = {
    first_name?: string;
    last_name?: string;
    email?: string;
    username?: string;
    phone_number?: string;
    role?: string;
};
export declare type StaffUpdateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StaffUpdateFormOverridesProps = {
    StaffUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StaffUpdateFormProps = React.PropsWithChildren<{
    overrides?: StaffUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    staff?: Staff;
    onSubmit?: (fields: StaffUpdateFormInputValues) => StaffUpdateFormInputValues;
    onSuccess?: (fields: StaffUpdateFormInputValues) => void;
    onError?: (fields: StaffUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StaffUpdateFormInputValues) => StaffUpdateFormInputValues;
    onValidate?: StaffUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StaffUpdateForm(props: StaffUpdateFormProps): React.ReactElement;
