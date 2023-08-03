/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StaffRosterCreateFormInputValues = {
    start_date?: string;
    end_date?: string;
    on_duty?: boolean;
};
export declare type StaffRosterCreateFormValidationValues = {
    start_date?: ValidationFunction<string>;
    end_date?: ValidationFunction<string>;
    on_duty?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StaffRosterCreateFormOverridesProps = {
    StaffRosterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
    end_date?: PrimitiveOverrideProps<TextFieldProps>;
    on_duty?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type StaffRosterCreateFormProps = React.PropsWithChildren<{
    overrides?: StaffRosterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StaffRosterCreateFormInputValues) => StaffRosterCreateFormInputValues;
    onSuccess?: (fields: StaffRosterCreateFormInputValues) => void;
    onError?: (fields: StaffRosterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StaffRosterCreateFormInputValues) => StaffRosterCreateFormInputValues;
    onValidate?: StaffRosterCreateFormValidationValues;
} & React.CSSProperties>;
export default function StaffRosterCreateForm(props: StaffRosterCreateFormProps): React.ReactElement;
