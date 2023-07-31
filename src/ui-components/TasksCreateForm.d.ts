/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TasksCreateFormInputValues = {
    title?: string;
    date_created?: string;
    date_due?: string;
    details?: string;
};
export declare type TasksCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    date_created?: ValidationFunction<string>;
    date_due?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TasksCreateFormOverridesProps = {
    TasksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    date_created?: PrimitiveOverrideProps<TextFieldProps>;
    date_due?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TasksCreateFormProps = React.PropsWithChildren<{
    overrides?: TasksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TasksCreateFormInputValues) => TasksCreateFormInputValues;
    onSuccess?: (fields: TasksCreateFormInputValues) => void;
    onError?: (fields: TasksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TasksCreateFormInputValues) => TasksCreateFormInputValues;
    onValidate?: TasksCreateFormValidationValues;
} & React.CSSProperties>;
export default function TasksCreateForm(props: TasksCreateFormProps): React.ReactElement;
