/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Appointments } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreateAppointmentForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    appointment_date: "",
    created_at: "",
    start_time: "",
    end_time: "",
    status: "",
    assigned_to: "",
  };
  const [appointment_date, setAppointment_date] = React.useState(
    initialValues.appointment_date
  );
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [start_time, setStart_time] = React.useState(initialValues.start_time);
  const [end_time, setEnd_time] = React.useState(initialValues.end_time);
  const [status, setStatus] = React.useState(initialValues.status);
  const [assigned_to, setAssigned_to] = React.useState(
    initialValues.assigned_to
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAppointment_date(initialValues.appointment_date);
    setCreated_at(initialValues.created_at);
    setStart_time(initialValues.start_time);
    setEnd_time(initialValues.end_time);
    setStatus(initialValues.status);
    setAssigned_to(initialValues.assigned_to);
    setErrors({});
  };
  const validations = {
    appointment_date: [{ type: "Required" }],
    created_at: [{ type: "Required" }],
    start_time: [{ type: "Required" }],
    end_time: [{ type: "Required" }],
    status: [],
    assigned_to: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          appointment_date,
          created_at,
          start_time,
          end_time,
          status,
          assigned_to,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Appointments(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreateAppointmentForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Appointment date</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={appointment_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointment_date: value,
              created_at,
              start_time,
              end_time,
              status,
              assigned_to,
            };
            const result = onChange(modelFields);
            value = result?.appointment_date ?? value;
          }
          if (errors.appointment_date?.hasError) {
            runValidationTasks("appointment_date", value);
          }
          setAppointment_date(value);
        }}
        onBlur={() => runValidationTasks("appointment_date", appointment_date)}
        errorMessage={errors.appointment_date?.errorMessage}
        hasError={errors.appointment_date?.hasError}
        {...getOverrideProps(overrides, "appointment_date")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Created at</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={created_at && convertToLocal(new Date(created_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              appointment_date,
              created_at: value,
              start_time,
              end_time,
              status,
              assigned_to,
            };
            const result = onChange(modelFields);
            value = result?.created_at ?? value;
          }
          if (errors.created_at?.hasError) {
            runValidationTasks("created_at", value);
          }
          setCreated_at(value);
        }}
        onBlur={() => runValidationTasks("created_at", created_at)}
        errorMessage={errors.created_at?.errorMessage}
        hasError={errors.created_at?.hasError}
        {...getOverrideProps(overrides, "created_at")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Start time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={start_time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointment_date,
              created_at,
              start_time: value,
              end_time,
              status,
              assigned_to,
            };
            const result = onChange(modelFields);
            value = result?.start_time ?? value;
          }
          if (errors.start_time?.hasError) {
            runValidationTasks("start_time", value);
          }
          setStart_time(value);
        }}
        onBlur={() => runValidationTasks("start_time", start_time)}
        errorMessage={errors.start_time?.errorMessage}
        hasError={errors.start_time?.hasError}
        {...getOverrideProps(overrides, "start_time")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>End time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={end_time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointment_date,
              created_at,
              start_time,
              end_time: value,
              status,
              assigned_to,
            };
            const result = onChange(modelFields);
            value = result?.end_time ?? value;
          }
          if (errors.end_time?.hasError) {
            runValidationTasks("end_time", value);
          }
          setEnd_time(value);
        }}
        onBlur={() => runValidationTasks("end_time", end_time)}
        errorMessage={errors.end_time?.errorMessage}
        hasError={errors.end_time?.hasError}
        {...getOverrideProps(overrides, "end_time")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointment_date,
              created_at,
              start_time,
              end_time,
              status: value,
              assigned_to,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Done"
          value="DONE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Missed"
          value="MISSED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Rescheduled"
          value="RESCHEDULED"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Assigned to</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={assigned_to}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointment_date,
              created_at,
              start_time,
              end_time,
              status,
              assigned_to: value,
            };
            const result = onChange(modelFields);
            value = result?.assigned_to ?? value;
          }
          if (errors.assigned_to?.hasError) {
            runValidationTasks("assigned_to", value);
          }
          setAssigned_to(value);
        }}
        onBlur={() => runValidationTasks("assigned_to", assigned_to)}
        errorMessage={errors.assigned_to?.errorMessage}
        hasError={errors.assigned_to?.hasError}
        {...getOverrideProps(overrides, "assigned_to")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
