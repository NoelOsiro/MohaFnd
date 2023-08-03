/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStaffRoster = /* GraphQL */ `
  mutation CreateStaffRoster(
    $input: CreateStaffRosterInput!
    $condition: ModelStaffRosterConditionInput
  ) {
    createStaffRoster(input: $input, condition: $condition) {
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
export const updateStaffRoster = /* GraphQL */ `
  mutation UpdateStaffRoster(
    $input: UpdateStaffRosterInput!
    $condition: ModelStaffRosterConditionInput
  ) {
    updateStaffRoster(input: $input, condition: $condition) {
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
export const deleteStaffRoster = /* GraphQL */ `
  mutation DeleteStaffRoster(
    $input: DeleteStaffRosterInput!
    $condition: ModelStaffRosterConditionInput
  ) {
    deleteStaffRoster(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createStaffMessages = /* GraphQL */ `
  mutation CreateStaffMessages(
    $input: CreateStaffMessagesInput!
    $condition: ModelStaffMessagesConditionInput
  ) {
    createStaffMessages(input: $input, condition: $condition) {
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
export const updateStaffMessages = /* GraphQL */ `
  mutation UpdateStaffMessages(
    $input: UpdateStaffMessagesInput!
    $condition: ModelStaffMessagesConditionInput
  ) {
    updateStaffMessages(input: $input, condition: $condition) {
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
export const deleteStaffMessages = /* GraphQL */ `
  mutation DeleteStaffMessages(
    $input: DeleteStaffMessagesInput!
    $condition: ModelStaffMessagesConditionInput
  ) {
    deleteStaffMessages(input: $input, condition: $condition) {
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
export const createStaffTasks = /* GraphQL */ `
  mutation CreateStaffTasks(
    $input: CreateStaffTasksInput!
    $condition: ModelStaffTasksConditionInput
  ) {
    createStaffTasks(input: $input, condition: $condition) {
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
export const updateStaffTasks = /* GraphQL */ `
  mutation UpdateStaffTasks(
    $input: UpdateStaffTasksInput!
    $condition: ModelStaffTasksConditionInput
  ) {
    updateStaffTasks(input: $input, condition: $condition) {
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
export const deleteStaffTasks = /* GraphQL */ `
  mutation DeleteStaffTasks(
    $input: DeleteStaffTasksInput!
    $condition: ModelStaffTasksConditionInput
  ) {
    deleteStaffTasks(input: $input, condition: $condition) {
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
export const createPatientAppointments = /* GraphQL */ `
  mutation CreatePatientAppointments(
    $input: CreatePatientAppointmentsInput!
    $condition: ModelPatientAppointmentsConditionInput
  ) {
    createPatientAppointments(input: $input, condition: $condition) {
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
export const updatePatientAppointments = /* GraphQL */ `
  mutation UpdatePatientAppointments(
    $input: UpdatePatientAppointmentsInput!
    $condition: ModelPatientAppointmentsConditionInput
  ) {
    updatePatientAppointments(input: $input, condition: $condition) {
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
export const deletePatientAppointments = /* GraphQL */ `
  mutation DeletePatientAppointments(
    $input: DeletePatientAppointmentsInput!
    $condition: ModelPatientAppointmentsConditionInput
  ) {
    deletePatientAppointments(input: $input, condition: $condition) {
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
