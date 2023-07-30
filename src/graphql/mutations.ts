/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      username
      phone_number
      role
      staff_appointments {
        items {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
          patientID
          staffID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      username
      phone_number
      role
      staff_appointments {
        items {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
          patientID
          staffID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      username
      phone_number
      role
      staff_appointments {
        items {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
          patientID
          staffID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAppointments = /* GraphQL */ `
  mutation CreateAppointments(
    $input: CreateAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    createAppointments(input: $input, condition: $condition) {
      id
      appointment_date
      created_at
      start_time
      end_time
      status
      assigned_to
      patientID
      staffID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAppointments = /* GraphQL */ `
  mutation UpdateAppointments(
    $input: UpdateAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    updateAppointments(input: $input, condition: $condition) {
      id
      appointment_date
      created_at
      start_time
      end_time
      status
      assigned_to
      patientID
      staffID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAppointments = /* GraphQL */ `
  mutation DeleteAppointments(
    $input: DeleteAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    deleteAppointments(input: $input, condition: $condition) {
      id
      appointment_date
      created_at
      start_time
      end_time
      status
      assigned_to
      patientID
      staffID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      date_of_birth
      phone_number
      pat_appointments {
        items {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
          patientID
          staffID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      date_of_birth
      phone_number
      pat_appointments {
        items {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
          patientID
          staffID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      date_of_birth
      phone_number
      pat_appointments {
        items {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
          patientID
          staffID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
