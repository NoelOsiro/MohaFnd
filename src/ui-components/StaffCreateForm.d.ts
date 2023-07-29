/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StaffCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    email?: string;
    username?: string;
    phone_number?: string;
    role?: string;
};
export declare type StaffCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StaffCreateFormOverridesProps = {
    StaffCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StaffCreateFormProps = React.PropsWithChildren<{
    overrides?: StaffCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StaffCreateFormInputValues) => StaffCreateFormInputValues;
    onSuccess?: (fields: StaffCreateFormInputValues) => void;
    onError?: (fields: StaffCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StaffCreateFormInputValues) => StaffCreateFormInputValues;
    onValidate?: StaffCreateFormValidationValues;
} & React.CSSProperties>;
export default function StaffCreateForm(props: StaffCreateFormProps): React.ReactElement;
