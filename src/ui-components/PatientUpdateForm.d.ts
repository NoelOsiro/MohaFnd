/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Patient } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatientUpdateFormInputValues = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_number?: string;
    date_of_birth?: string;
    gender?: string;
};
export declare type PatientUpdateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientUpdateFormOverridesProps = {
    PatientUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatientUpdateFormProps = React.PropsWithChildren<{
    overrides?: PatientUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    patient?: Patient;
    onSubmit?: (fields: PatientUpdateFormInputValues) => PatientUpdateFormInputValues;
    onSuccess?: (fields: PatientUpdateFormInputValues) => void;
    onError?: (fields: PatientUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientUpdateFormInputValues) => PatientUpdateFormInputValues;
    onValidate?: PatientUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PatientUpdateForm(props: PatientUpdateFormProps): React.ReactElement;
