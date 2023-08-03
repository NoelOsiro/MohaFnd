/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Messages } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MessagesCreateForm(props) {
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
    sender_id: "",
    receiver_id: "",
    message: "",
    created_at: "",
  };
  const [sender_id, setSender_id] = React.useState(initialValues.sender_id);
  const [receiver_id, setReceiver_id] = React.useState(
    initialValues.receiver_id
  );
  const [message, setMessage] = React.useState(initialValues.message);
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSender_id(initialValues.sender_id);
    setReceiver_id(initialValues.receiver_id);
    setMessage(initialValues.message);
    setCreated_at(initialValues.created_at);
    setErrors({});
  };
  const validations = {
    sender_id: [{ type: "Required" }],
    receiver_id: [{ type: "Required" }],
    message: [{ type: "Required" }],
    created_at: [{ type: "Required" }],
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
          sender_id,
          receiver_id,
          message,
          created_at,
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
          await DataStore.save(new Messages(modelFields));
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
      {...getOverrideProps(overrides, "MessagesCreateForm")}
      {...rest}
    >
      <TextField
        label="Sender id"
        isRequired={true}
        isReadOnly={false}
        value={sender_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sender_id: value,
              receiver_id,
              message,
              created_at,
            };
            const result = onChange(modelFields);
            value = result?.sender_id ?? value;
          }
          if (errors.sender_id?.hasError) {
            runValidationTasks("sender_id", value);
          }
          setSender_id(value);
        }}
        onBlur={() => runValidationTasks("sender_id", sender_id)}
        errorMessage={errors.sender_id?.errorMessage}
        hasError={errors.sender_id?.hasError}
        {...getOverrideProps(overrides, "sender_id")}
      ></TextField>
      <TextField
        label="Receiver id"
        isRequired={true}
        isReadOnly={false}
        value={receiver_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sender_id,
              receiver_id: value,
              message,
              created_at,
            };
            const result = onChange(modelFields);
            value = result?.receiver_id ?? value;
          }
          if (errors.receiver_id?.hasError) {
            runValidationTasks("receiver_id", value);
          }
          setReceiver_id(value);
        }}
        onBlur={() => runValidationTasks("receiver_id", receiver_id)}
        errorMessage={errors.receiver_id?.errorMessage}
        hasError={errors.receiver_id?.hasError}
        {...getOverrideProps(overrides, "receiver_id")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={true}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sender_id,
              receiver_id,
              message: value,
              created_at,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={created_at && convertToLocal(new Date(created_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              sender_id,
              receiver_id,
              message,
              created_at: value,
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
