/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Task } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TaskUpdateForm(props) {
  const {
    id: idProp,
    task: taskModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    date_created: "",
    date_due: "",
    details: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [date_created, setDate_created] = React.useState(
    initialValues.date_created
  );
  const [date_due, setDate_due] = React.useState(initialValues.date_due);
  const [details, setDetails] = React.useState(initialValues.details);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskRecord
      ? { ...initialValues, ...taskRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDate_created(cleanValues.date_created);
    setDate_due(cleanValues.date_due);
    setDetails(cleanValues.details);
    setErrors({});
  };
  const [taskRecord, setTaskRecord] = React.useState(taskModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Task, idProp)
        : taskModelProp;
      setTaskRecord(record);
    };
    queryData();
  }, [idProp, taskModelProp]);
  React.useEffect(resetStateValues, [taskRecord]);
  const validations = {
    title: [],
    date_created: [],
    date_due: [],
    details: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          date_created,
          date_due,
          details,
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
          await DataStore.save(
            Task.copyOf(taskRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              date_created,
              date_due,
              details,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Date created"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_created}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              date_created: value,
              date_due,
              details,
            };
            const result = onChange(modelFields);
            value = result?.date_created ?? value;
          }
          if (errors.date_created?.hasError) {
            runValidationTasks("date_created", value);
          }
          setDate_created(value);
        }}
        onBlur={() => runValidationTasks("date_created", date_created)}
        errorMessage={errors.date_created?.errorMessage}
        hasError={errors.date_created?.hasError}
        {...getOverrideProps(overrides, "date_created")}
      ></TextField>
      <TextField
        label="Date due"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_due}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              date_created,
              date_due: value,
              details,
            };
            const result = onChange(modelFields);
            value = result?.date_due ?? value;
          }
          if (errors.date_due?.hasError) {
            runValidationTasks("date_due", value);
          }
          setDate_due(value);
        }}
        onBlur={() => runValidationTasks("date_due", date_due)}
        errorMessage={errors.date_due?.errorMessage}
        hasError={errors.date_due?.hasError}
        {...getOverrideProps(overrides, "date_due")}
      ></TextField>
      <TextField
        label="Details"
        isRequired={false}
        isReadOnly={false}
        value={details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              date_created,
              date_due,
              details: value,
            };
            const result = onChange(modelFields);
            value = result?.details ?? value;
          }
          if (errors.details?.hasError) {
            runValidationTasks("details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("details", details)}
        errorMessage={errors.details?.errorMessage}
        hasError={errors.details?.hasError}
        {...getOverrideProps(overrides, "details")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || taskModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || taskModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
