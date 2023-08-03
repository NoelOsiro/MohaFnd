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
export declare type AppointmentsCreateFormInputValues = {
    appointment_date?: string;
    created_at?: string;
    start_time?: string;
    end_time?: string;
    status?: string;
    assigned_to?: string;
    patientID?: string;
    staffID?: string;
};
export declare type AppointmentsCreateFormValidationValues = {
    appointment_date?: ValidationFunction<string>;
    created_at?: ValidationFunction<string>;
    start_time?: ValidationFunction<string>;
    end_time?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    assigned_to?: ValidationFunction<string>;
    patientID?: ValidationFunction<string>;
    staffID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentsCreateFormOverridesProps = {
    AppointmentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    appointment_date?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    start_time?: PrimitiveOverrideProps<TextFieldProps>;
    end_time?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    assigned_to?: PrimitiveOverrideProps<TextFieldProps>;
    patientID?: PrimitiveOverrideProps<TextFieldProps>;
    staffID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppointmentsCreateFormProps = React.PropsWithChildren<{
    overrides?: AppointmentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppointmentsCreateFormInputValues) => AppointmentsCreateFormInputValues;
    onSuccess?: (fields: AppointmentsCreateFormInputValues) => void;
    onError?: (fields: AppointmentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppointmentsCreateFormInputValues) => AppointmentsCreateFormInputValues;
    onValidate?: AppointmentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppointmentsCreateForm(props: AppointmentsCreateFormProps): React.ReactElement;
