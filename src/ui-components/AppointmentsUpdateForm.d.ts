/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Appointments } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppointmentsUpdateFormInputValues = {
    appointment_date?: string;
    created_at?: string;
    start_time?: string;
    end_time?: string;
    status?: string;
    assigned_to?: string;
    patientID?: string;
    staffID?: string;
};
export declare type AppointmentsUpdateFormValidationValues = {
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
export declare type AppointmentsUpdateFormOverridesProps = {
    AppointmentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    appointment_date?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    start_time?: PrimitiveOverrideProps<TextFieldProps>;
    end_time?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    assigned_to?: PrimitiveOverrideProps<TextFieldProps>;
    patientID?: PrimitiveOverrideProps<TextFieldProps>;
    staffID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppointmentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppointmentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appointments?: Appointments;
    onSubmit?: (fields: AppointmentsUpdateFormInputValues) => AppointmentsUpdateFormInputValues;
    onSuccess?: (fields: AppointmentsUpdateFormInputValues) => void;
    onError?: (fields: AppointmentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppointmentsUpdateFormInputValues) => AppointmentsUpdateFormInputValues;
    onValidate?: AppointmentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppointmentsUpdateForm(props: AppointmentsUpdateFormProps): React.ReactElement;
