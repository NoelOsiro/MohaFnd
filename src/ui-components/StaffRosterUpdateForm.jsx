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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { StaffRoster } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StaffRosterUpdateForm(props) {
  const {
    id: idProp,
    staffRoster: staffRosterModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    start_date: "",
    end_date: "",
    on_duty: false,
  };
  const [start_date, setStart_date] = React.useState(initialValues.start_date);
  const [end_date, setEnd_date] = React.useState(initialValues.end_date);
  const [on_duty, setOn_duty] = React.useState(initialValues.on_duty);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = staffRosterRecord
      ? { ...initialValues, ...staffRosterRecord }
      : initialValues;
    setStart_date(cleanValues.start_date);
    setEnd_date(cleanValues.end_date);
    setOn_duty(cleanValues.on_duty);
    setErrors({});
  };
  const [staffRosterRecord, setStaffRosterRecord] =
    React.useState(staffRosterModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(StaffRoster, idProp)
        : staffRosterModelProp;
      setStaffRosterRecord(record);
    };
    queryData();
  }, [idProp, staffRosterModelProp]);
  React.useEffect(resetStateValues, [staffRosterRecord]);
  const validations = {
    start_date: [],
    end_date: [],
    on_duty: [],
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
          start_date,
          end_date,
          on_duty,
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
            StaffRoster.copyOf(staffRosterRecord, (updated) => {
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
      {...getOverrideProps(overrides, "StaffRosterUpdateForm")}
      {...rest}
    >
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={start_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start_date: value,
              end_date,
              on_duty,
            };
            const result = onChange(modelFields);
            value = result?.start_date ?? value;
          }
          if (errors.start_date?.hasError) {
            runValidationTasks("start_date", value);
          }
          setStart_date(value);
        }}
        onBlur={() => runValidationTasks("start_date", start_date)}
        errorMessage={errors.start_date?.errorMessage}
        hasError={errors.start_date?.hasError}
        {...getOverrideProps(overrides, "start_date")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={end_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start_date,
              end_date: value,
              on_duty,
            };
            const result = onChange(modelFields);
            value = result?.end_date ?? value;
          }
          if (errors.end_date?.hasError) {
            runValidationTasks("end_date", value);
          }
          setEnd_date(value);
        }}
        onBlur={() => runValidationTasks("end_date", end_date)}
        errorMessage={errors.end_date?.errorMessage}
        hasError={errors.end_date?.hasError}
        {...getOverrideProps(overrides, "end_date")}
      ></TextField>
      <SwitchField
        label="On duty"
        defaultChecked={false}
        isDisabled={false}
        isChecked={on_duty}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              start_date,
              end_date,
              on_duty: value,
            };
            const result = onChange(modelFields);
            value = result?.on_duty ?? value;
          }
          if (errors.on_duty?.hasError) {
            runValidationTasks("on_duty", value);
          }
          setOn_duty(value);
        }}
        onBlur={() => runValidationTasks("on_duty", on_duty)}
        errorMessage={errors.on_duty?.errorMessage}
        hasError={errors.on_duty?.hasError}
        {...getOverrideProps(overrides, "on_duty")}
      ></SwitchField>
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
          isDisabled={!(idProp || staffRosterModelProp)}
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
              !(idProp || staffRosterModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
