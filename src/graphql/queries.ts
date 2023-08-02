/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTasks = /* GraphQL */ `
  query GetTasks($id: ID!) {
    getTasks(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
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
export const listStaff = /* GraphQL */ `
  query ListStaff(
    $id: ID
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStaff(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStaff = /* GraphQL */ `
  query SyncStaff(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStaff(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAppointments = /* GraphQL */ `
  query GetAppointments($id: ID!) {
    getAppointments(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $id: ID
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatients(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        first_name
        last_name
        email
        date_of_birth
        phone_number
        pat_appointments {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPatients = /* GraphQL */ `
  query SyncPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        email
        date_of_birth
        phone_number
        pat_appointments {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStaffTasks = /* GraphQL */ `
  query GetStaffTasks($id: ID!) {
    getStaffTasks(id: $id) {
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
export const listStaffTasks = /* GraphQL */ `
  query ListStaffTasks(
    $filter: ModelStaffTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tasksId
        staffId
        tasks {
          id
          title
          date_created
          date_due
          details
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStaffTasks = /* GraphQL */ `
  query SyncStaffTasks(
    $filter: ModelStaffTasksFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStaffTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tasksId
        staffId
        tasks {
          id
          title
          date_created
          date_due
          details
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const staffByEmail = /* GraphQL */ `
  query StaffByEmail(
    $email: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    staffByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const staffByPhoneNumber = /* GraphQL */ `
  query StaffByPhoneNumber(
    $phone_number: AWSPhone!
    $sortDirection: ModelSortDirection
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    staffByPhoneNumber(
      phone_number: $phone_number
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const appointmentsByPatientID = /* GraphQL */ `
  query AppointmentsByPatientID(
    $patientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByPatientID(
      patientID: $patientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const appointmentsByStaffID = /* GraphQL */ `
  query AppointmentsByStaffID(
    $staffID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByStaffID(
      staffID: $staffID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const patientByEmail = /* GraphQL */ `
  query PatientByEmail(
    $email: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        first_name
        last_name
        email
        date_of_birth
        phone_number
        pat_appointments {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const patientByPhoneNumber = /* GraphQL */ `
  query PatientByPhoneNumber(
    $phone_number: AWSPhone!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientByPhoneNumber(
      phone_number: $phone_number
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        first_name
        last_name
        email
        date_of_birth
        phone_number
        pat_appointments {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const staffTasksByTasksId = /* GraphQL */ `
  query StaffTasksByTasksId(
    $tasksId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStaffTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    staffTasksByTasksId(
      tasksId: $tasksId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tasksId
        staffId
        tasks {
          id
          title
          date_created
          date_due
          details
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const staffTasksByStaffId = /* GraphQL */ `
  query StaffTasksByStaffId(
    $staffId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStaffTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    staffTasksByStaffId(
      staffId: $staffId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tasksId
        staffId
        tasks {
          id
          title
          date_created
          date_due
          details
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
      nextToken
      startedAt
      __typename
    }
  }
`;
