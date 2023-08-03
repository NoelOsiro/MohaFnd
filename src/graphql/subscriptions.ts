/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStaffRoster = /* GraphQL */ `
  subscription OnCreateStaffRoster(
    $filter: ModelSubscriptionStaffRosterFilterInput
  ) {
    onCreateStaffRoster(filter: $filter) {
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
export const onUpdateStaffRoster = /* GraphQL */ `
  subscription OnUpdateStaffRoster(
    $filter: ModelSubscriptionStaffRosterFilterInput
  ) {
    onUpdateStaffRoster(filter: $filter) {
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
export const onDeleteStaffRoster = /* GraphQL */ `
  subscription OnDeleteStaffRoster(
    $filter: ModelSubscriptionStaffRosterFilterInput
  ) {
    onDeleteStaffRoster(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onCreatePatient(filter: $filter) {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onUpdatePatient(filter: $filter) {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
    onDeletePatient(filter: $filter) {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
export const onCreateStaffMessages = /* GraphQL */ `
  subscription OnCreateStaffMessages(
    $filter: ModelSubscriptionStaffMessagesFilterInput
  ) {
    onCreateStaffMessages(filter: $filter) {
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
export const onUpdateStaffMessages = /* GraphQL */ `
  subscription OnUpdateStaffMessages(
    $filter: ModelSubscriptionStaffMessagesFilterInput
  ) {
    onUpdateStaffMessages(filter: $filter) {
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
export const onDeleteStaffMessages = /* GraphQL */ `
  subscription OnDeleteStaffMessages(
    $filter: ModelSubscriptionStaffMessagesFilterInput
  ) {
    onDeleteStaffMessages(filter: $filter) {
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
export const onCreateStaffTasks = /* GraphQL */ `
  subscription OnCreateStaffTasks(
    $filter: ModelSubscriptionStaffTasksFilterInput
  ) {
    onCreateStaffTasks(filter: $filter) {
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
export const onUpdateStaffTasks = /* GraphQL */ `
  subscription OnUpdateStaffTasks(
    $filter: ModelSubscriptionStaffTasksFilterInput
  ) {
    onUpdateStaffTasks(filter: $filter) {
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
export const onDeleteStaffTasks = /* GraphQL */ `
  subscription OnDeleteStaffTasks(
    $filter: ModelSubscriptionStaffTasksFilterInput
  ) {
    onDeleteStaffTasks(filter: $filter) {
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
export const onCreatePatientAppointments = /* GraphQL */ `
  subscription OnCreatePatientAppointments(
    $filter: ModelSubscriptionPatientAppointmentsFilterInput
  ) {
    onCreatePatientAppointments(filter: $filter) {
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
export const onUpdatePatientAppointments = /* GraphQL */ `
  subscription OnUpdatePatientAppointments(
    $filter: ModelSubscriptionPatientAppointmentsFilterInput
  ) {
    onUpdatePatientAppointments(filter: $filter) {
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
export const onDeletePatientAppointments = /* GraphQL */ `
  subscription OnDeletePatientAppointments(
    $filter: ModelSubscriptionPatientAppointmentsFilterInput
  ) {
    onDeletePatientAppointments(filter: $filter) {
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
