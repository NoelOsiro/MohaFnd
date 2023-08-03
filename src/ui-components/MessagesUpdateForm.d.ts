/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Messages } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MessagesUpdateFormInputValues = {
    sender_id?: string;
    receiver_id?: string;
    message?: string;
    created_at?: string;
};
export declare type MessagesUpdateFormValidationValues = {
    sender_id?: ValidationFunction<string>;
    receiver_id?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    created_at?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessagesUpdateFormOverridesProps = {
    MessagesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sender_id?: PrimitiveOverrideProps<TextFieldProps>;
    receiver_id?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MessagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: MessagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    messages?: Messages;
    onSubmit?: (fields: MessagesUpdateFormInputValues) => MessagesUpdateFormInputValues;
    onSuccess?: (fields: MessagesUpdateFormInputValues) => void;
    onError?: (fields: MessagesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MessagesUpdateFormInputValues) => MessagesUpdateFormInputValues;
    onValidate?: MessagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MessagesUpdateForm(props: MessagesUpdateFormProps): React.ReactElement;
