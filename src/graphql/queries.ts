/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStaffRoster = /* GraphQL */ `
  query GetStaffRoster($id: ID!) {
    getStaffRoster(id: $id) {
      id
      staffID
      start_date
      end_date
      on_duty
      staff {
        id
        first_name
        last_name
        email
        username
        phone_number
        role
        appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        roster {
          id
          staffID
          start_date
          end_date
          on_duty
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listStaffRosters = /* GraphQL */ `
  query ListStaffRosters(
    $filter: ModelStaffRosterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffRosters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        staffID
        start_date
        end_date
        on_duty
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
export const syncStaffRosters = /* GraphQL */ `
  query SyncStaffRosters(
    $filter: ModelStaffRosterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStaffRosters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        staffID
        start_date
        end_date
        on_duty
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
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      sender_id
      receiver_id
      message
      created_at
      staff {
        items {
          id
          messageId
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sender_id
        receiver_id
        message
        created_at
        staff {
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
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sender_id
        receiver_id
        message
        created_at
        staff {
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
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      date_created
      date_due
      details
      staff {
        items {
          id
          taskId
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
    $filter: ModelTaskFilterInput
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
        staff {
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
    $filter: ModelTaskFilterInput
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
        staff {
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
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      first_name
      last_name
      email
      phone_number
      date_of_birth
      gender
      appointments {
        items {
          id
          patientId
          appointmentId
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
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        phone_number
        date_of_birth
        gender
        appointments {
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
        phone_number
        date_of_birth
        gender
        appointments {
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
      appointments {
        items {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
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
          taskId
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
      messages {
        items {
          id
          messageId
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
      roster {
        id
        staffID
        start_date
        end_date
        on_duty
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
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaff(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        username
        phone_number
        role
        appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        roster {
          id
          staffID
          start_date
          end_date
          on_duty
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
        appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        roster {
          id
          staffID
          start_date
          end_date
          on_duty
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
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      appointment_date
      created_at
      start_time
      end_time
      status
      assigned_to
      patients {
        items {
          id
          patientId
          appointmentId
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
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
        patients {
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
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
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
        patients {
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
export const getStaffMessages = /* GraphQL */ `
  query GetStaffMessages($id: ID!) {
    getStaffMessages(id: $id) {
      id
      messageId
      staffId
      message {
        id
        sender_id
        receiver_id
        message
        created_at
        staff {
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
        appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        roster {
          id
          staffID
          start_date
          end_date
          on_duty
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listStaffMessages = /* GraphQL */ `
  query ListStaffMessages(
    $filter: ModelStaffMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messageId
        staffId
        message {
          id
          sender_id
          receiver_id
          message
          created_at
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
export const syncStaffMessages = /* GraphQL */ `
  query SyncStaffMessages(
    $filter: ModelStaffMessagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStaffMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        messageId
        staffId
        message {
          id
          sender_id
          receiver_id
          message
          created_at
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
export const getStaffTasks = /* GraphQL */ `
  query GetStaffTasks($id: ID!) {
    getStaffTasks(id: $id) {
      id
      taskId
      staffId
      task {
        id
        title
        date_created
        date_due
        details
        staff {
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
        appointments {
          nextToken
          startedAt
          __typename
        }
        tasks {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        roster {
          id
          staffID
          start_date
          end_date
          on_duty
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
        taskId
        staffId
        task {
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
        taskId
        staffId
        task {
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
export const getPatientAppointments = /* GraphQL */ `
  query GetPatientAppointments($id: ID!) {
    getPatientAppointments(id: $id) {
      id
      patientId
      appointmentId
      patient {
        id
        first_name
        last_name
        email
        phone_number
        date_of_birth
        gender
        appointments {
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
      appointment {
        id
        appointment_date
        created_at
        start_time
        end_time
        status
        assigned_to
        patients {
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
export const listPatientAppointments = /* GraphQL */ `
  query ListPatientAppointments(
    $filter: ModelPatientAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        appointmentId
        patient {
          id
          first_name
          last_name
          email
          phone_number
          date_of_birth
          gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        appointment {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
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
export const syncPatientAppointments = /* GraphQL */ `
  query SyncPatientAppointments(
    $filter: ModelPatientAppointmentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatientAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        patientId
        appointmentId
        patient {
          id
          first_name
          last_name
          email
          phone_number
          date_of_birth
          gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        appointment {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
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
export const staffMessagesByMessageId = /* GraphQL */ `
  query StaffMessagesByMessageId(
    $messageId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStaffMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    staffMessagesByMessageId(
      messageId: $messageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        staffId
        message {
          id
          sender_id
          receiver_id
          message
          created_at
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
export const staffMessagesByStaffId = /* GraphQL */ `
  query StaffMessagesByStaffId(
    $staffId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStaffMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    staffMessagesByStaffId(
      staffId: $staffId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        staffId
        message {
          id
          sender_id
          receiver_id
          message
          created_at
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
export const staffTasksByTaskId = /* GraphQL */ `
  query StaffTasksByTaskId(
    $taskId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStaffTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    staffTasksByTaskId(
      taskId: $taskId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        taskId
        staffId
        task {
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
        taskId
        staffId
        task {
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
export const patientAppointmentsByPatientId = /* GraphQL */ `
  query PatientAppointmentsByPatientId(
    $patientId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientAppointmentsByPatientId(
      patientId: $patientId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        appointmentId
        patient {
          id
          first_name
          last_name
          email
          phone_number
          date_of_birth
          gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        appointment {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
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
export const patientAppointmentsByAppointmentId = /* GraphQL */ `
  query PatientAppointmentsByAppointmentId(
    $appointmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientAppointmentsByAppointmentId(
      appointmentId: $appointmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        appointmentId
        patient {
          id
          first_name
          last_name
          email
          phone_number
          date_of_birth
          gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        appointment {
          id
          appointment_date
          created_at
          start_time
          end_time
          status
          assigned_to
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
