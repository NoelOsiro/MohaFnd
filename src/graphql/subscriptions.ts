/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTasks = /* GraphQL */ `
  subscription OnCreateTasks($filter: ModelSubscriptionTasksFilterInput) {
    onCreateTasks(filter: $filter) {
      id
      title
      date_created
      date_due
      details
      staff_assigned {
        items {
          id
          tasksId
          staffId
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
export const onUpdateTasks = /* GraphQL */ `
  subscription OnUpdateTasks($filter: ModelSubscriptionTasksFilterInput) {
    onUpdateTasks(filter: $filter) {
      id
      title
      date_created
      date_due
      details
      staff_assigned {
        items {
          id
          tasksId
          staffId
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
export const onDeleteTasks = /* GraphQL */ `
  subscription OnDeleteTasks($filter: ModelSubscriptionTasksFilterInput) {
    onDeleteTasks(filter: $filter) {
      id
      title
      date_created
      date_due
      details
      staff_assigned {
        items {
          id
          tasksId
          staffId
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
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
    onCreateStaff(filter: $filter) {
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
      tasks {
        items {
          id
          tasksId
          staffId
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
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
    onUpdateStaff(filter: $filter) {
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
      tasks {
        items {
          id
          tasksId
          staffId
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
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
    onDeleteStaff(filter: $filter) {
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
      tasks {
        items {
          id
          tasksId
          staffId
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
export const onCreateAppointments = /* GraphQL */ `
  subscription OnCreateAppointments(
    $filter: ModelSubscriptionAppointmentsFilterInput
  ) {
    onCreateAppointments(filter: $filter) {
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
export const onUpdateAppointments = /* GraphQL */ `
  subscription OnUpdateAppointments(
    $filter: ModelSubscriptionAppointmentsFilterInput
  ) {
    onUpdateAppointments(filter: $filter) {
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
export const onDeleteAppointments = /* GraphQL */ `
  subscription OnDeleteAppointments(
    $filter: ModelSubscriptionAppointmentsFilterInput
  ) {
    onDeleteAppointments(filter: $filter) {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onCreatePatient(filter: $filter) {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onUpdatePatient(filter: $filter) {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
    onDeletePatient(filter: $filter) {
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
export const onCreateStaffTasks = /* GraphQL */ `
  subscription OnCreateStaffTasks(
    $filter: ModelSubscriptionStaffTasksFilterInput
  ) {
    onCreateStaffTasks(filter: $filter) {
      id
      tasksId
      staffId
      tasks {
        id
        title
        date_created
        date_due
        details
        staff_assigned {
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
      staff {
        id
        first_name
        last_name
        email
        username
        phone_number
        role
        staff_appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStaffTasks = /* GraphQL */ `
  subscription OnUpdateStaffTasks(
    $filter: ModelSubscriptionStaffTasksFilterInput
  ) {
    onUpdateStaffTasks(filter: $filter) {
      id
      tasksId
      staffId
      tasks {
        id
        title
        date_created
        date_due
        details
        staff_assigned {
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
      staff {
        id
        first_name
        last_name
        email
        username
        phone_number
        role
        staff_appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStaffTasks = /* GraphQL */ `
  subscription OnDeleteStaffTasks(
    $filter: ModelSubscriptionStaffTasksFilterInput
  ) {
    onDeleteStaffTasks(filter: $filter) {
      id
      tasksId
      staffId
      tasks {
        id
        title
        date_created
        date_due
        details
        staff_assigned {
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
      staff {
        id
        first_name
        last_name
        email
        username
        phone_number
        role
        staff_appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
