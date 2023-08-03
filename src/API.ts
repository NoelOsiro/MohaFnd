/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStaffRosterInput = {
  id?: string | null,
  staffID: string,
  start_date?: string | null,
  end_date?: string | null,
  on_duty?: boolean | null,
  _version?: number | null,
};

export type ModelStaffRosterConditionInput = {
  staffID?: ModelIDInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  on_duty?: ModelBooleanInput | null,
  and?: Array< ModelStaffRosterConditionInput | null > | null,
  or?: Array< ModelStaffRosterConditionInput | null > | null,
  not?: ModelStaffRosterConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type StaffRoster = {
  __typename: "StaffRoster",
  id: string,
  staffID: string,
  start_date?: string | null,
  end_date?: string | null,
  on_duty?: boolean | null,
  staff?: Staff | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Staff = {
  __typename: "Staff",
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  username?: string | null,
  phone_number?: string | null,
  role?: StaffRoleEnum | null,
  appointments?: ModelAppointmentConnection | null,
  tasks?: ModelStaffTasksConnection | null,
  messages?: ModelStaffMessagesConnection | null,
  roster?: StaffRoster | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum StaffRoleEnum {
  DOCTOR = "DOCTOR",
  RECEPTIONIST = "RECEPTIONIST",
  NURSE = "NURSE",
  NURSEAID = "NURSEAID",
  ASSISTANT = "ASSISTANT",
}


export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items:  Array<Appointment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  appointment_date?: string | null,
  created_at?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  status?: AppointmentStatusEnum | null,
  assigned_to?: string | null,
  patients?: ModelPatientAppointmentsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum AppointmentStatusEnum {
  DONE = "DONE",
  PENDING = "PENDING",
  MISSED = "MISSED",
  RESCHEDULED = "RESCHEDULED",
}


export type ModelPatientAppointmentsConnection = {
  __typename: "ModelPatientAppointmentsConnection",
  items:  Array<PatientAppointments | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PatientAppointments = {
  __typename: "PatientAppointments",
  id: string,
  patientId: string,
  appointmentId: string,
  patient: Patient,
  appointment: Appointment,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  phone_number?: string | null,
  date_of_birth?: string | null,
  gender?: string | null,
  appointments?: ModelPatientAppointmentsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelStaffTasksConnection = {
  __typename: "ModelStaffTasksConnection",
  items:  Array<StaffTasks | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type StaffTasks = {
  __typename: "StaffTasks",
  id: string,
  taskId: string,
  staffId: string,
  task: Task,
  staff: Staff,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Task = {
  __typename: "Task",
  id: string,
  title?: string | null,
  date_created?: string | null,
  date_due?: string | null,
  details?: string | null,
  staff?: ModelStaffTasksConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelStaffMessagesConnection = {
  __typename: "ModelStaffMessagesConnection",
  items:  Array<StaffMessages | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type StaffMessages = {
  __typename: "StaffMessages",
  id: string,
  messageId: string,
  staffId: string,
  message: Message,
  staff: Staff,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Message = {
  __typename: "Message",
  id: string,
  sender_id: string,
  receiver_id: string,
  message: string,
  created_at: string,
  staff?: ModelStaffMessagesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateStaffRosterInput = {
  id: string,
  staffID?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  on_duty?: boolean | null,
  _version?: number | null,
};

export type DeleteStaffRosterInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  sender_id: string,
  receiver_id: string,
  message: string,
  created_at: string,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  sender_id?: ModelIDInput | null,
  receiver_id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateMessageInput = {
  id: string,
  sender_id?: string | null,
  receiver_id?: string | null,
  message?: string | null,
  created_at?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateTaskInput = {
  id?: string | null,
  title?: string | null,
  date_created?: string | null,
  date_due?: string | null,
  details?: string | null,
  _version?: number | null,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  date_created?: ModelStringInput | null,
  date_due?: ModelStringInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  date_created?: string | null,
  date_due?: string | null,
  details?: string | null,
  _version?: number | null,
};

export type DeleteTaskInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  phone_number?: string | null,
  date_of_birth?: string | null,
  gender?: string | null,
  _version?: number | null,
};

export type ModelPatientConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  date_of_birth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdatePatientInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  phone_number?: string | null,
  date_of_birth?: string | null,
  gender?: string | null,
  _version?: number | null,
};

export type DeletePatientInput = {
  id: string,
  _version?: number | null,
};

export type CreateStaffInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  username?: string | null,
  phone_number?: string | null,
  role?: StaffRoleEnum | null,
  _version?: number | null,
};

export type ModelStaffConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  role?: ModelStaffRoleEnumInput | null,
  and?: Array< ModelStaffConditionInput | null > | null,
  or?: Array< ModelStaffConditionInput | null > | null,
  not?: ModelStaffConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStaffRoleEnumInput = {
  eq?: StaffRoleEnum | null,
  ne?: StaffRoleEnum | null,
};

export type UpdateStaffInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  username?: string | null,
  phone_number?: string | null,
  role?: StaffRoleEnum | null,
  _version?: number | null,
};

export type DeleteStaffInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppointmentInput = {
  id?: string | null,
  appointment_date?: string | null,
  created_at?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  status?: AppointmentStatusEnum | null,
  assigned_to?: string | null,
  _version?: number | null,
};

export type ModelAppointmentConditionInput = {
  appointment_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  status?: ModelAppointmentStatusEnumInput | null,
  assigned_to?: ModelStringInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAppointmentStatusEnumInput = {
  eq?: AppointmentStatusEnum | null,
  ne?: AppointmentStatusEnum | null,
};

export type UpdateAppointmentInput = {
  id: string,
  appointment_date?: string | null,
  created_at?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  status?: AppointmentStatusEnum | null,
  assigned_to?: string | null,
  _version?: number | null,
};

export type DeleteAppointmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateStaffMessagesInput = {
  id?: string | null,
  messageId: string,
  staffId: string,
  _version?: number | null,
};

export type ModelStaffMessagesConditionInput = {
  messageId?: ModelIDInput | null,
  staffId?: ModelIDInput | null,
  and?: Array< ModelStaffMessagesConditionInput | null > | null,
  or?: Array< ModelStaffMessagesConditionInput | null > | null,
  not?: ModelStaffMessagesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateStaffMessagesInput = {
  id: string,
  messageId?: string | null,
  staffId?: string | null,
  _version?: number | null,
};

export type DeleteStaffMessagesInput = {
  id: string,
  _version?: number | null,
};

export type CreateStaffTasksInput = {
  id?: string | null,
  taskId: string,
  staffId: string,
  _version?: number | null,
};

export type ModelStaffTasksConditionInput = {
  taskId?: ModelIDInput | null,
  staffId?: ModelIDInput | null,
  and?: Array< ModelStaffTasksConditionInput | null > | null,
  or?: Array< ModelStaffTasksConditionInput | null > | null,
  not?: ModelStaffTasksConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateStaffTasksInput = {
  id: string,
  taskId?: string | null,
  staffId?: string | null,
  _version?: number | null,
};

export type DeleteStaffTasksInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientAppointmentsInput = {
  id?: string | null,
  patientId: string,
  appointmentId: string,
  _version?: number | null,
};

export type ModelPatientAppointmentsConditionInput = {
  patientId?: ModelIDInput | null,
  appointmentId?: ModelIDInput | null,
  and?: Array< ModelPatientAppointmentsConditionInput | null > | null,
  or?: Array< ModelPatientAppointmentsConditionInput | null > | null,
  not?: ModelPatientAppointmentsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdatePatientAppointmentsInput = {
  id: string,
  patientId?: string | null,
  appointmentId?: string | null,
  _version?: number | null,
};

export type DeletePatientAppointmentsInput = {
  id: string,
  _version?: number | null,
};

export type ModelStaffRosterFilterInput = {
  id?: ModelIDInput | null,
  staffID?: ModelIDInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  on_duty?: ModelBooleanInput | null,
  and?: Array< ModelStaffRosterFilterInput | null > | null,
  or?: Array< ModelStaffRosterFilterInput | null > | null,
  not?: ModelStaffRosterFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStaffRosterConnection = {
  __typename: "ModelStaffRosterConnection",
  items:  Array<StaffRoster | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  sender_id?: ModelIDInput | null,
  receiver_id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date_created?: ModelStringInput | null,
  date_due?: ModelStringInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  date_of_birth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStaffFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  role?: ModelStaffRoleEnumInput | null,
  and?: Array< ModelStaffFilterInput | null > | null,
  or?: Array< ModelStaffFilterInput | null > | null,
  not?: ModelStaffFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStaffConnection = {
  __typename: "ModelStaffConnection",
  items:  Array<Staff | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  appointment_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  status?: ModelAppointmentStatusEnumInput | null,
  assigned_to?: ModelStringInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStaffMessagesFilterInput = {
  id?: ModelIDInput | null,
  messageId?: ModelIDInput | null,
  staffId?: ModelIDInput | null,
  and?: Array< ModelStaffMessagesFilterInput | null > | null,
  or?: Array< ModelStaffMessagesFilterInput | null > | null,
  not?: ModelStaffMessagesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStaffTasksFilterInput = {
  id?: ModelIDInput | null,
  taskId?: ModelIDInput | null,
  staffId?: ModelIDInput | null,
  and?: Array< ModelStaffTasksFilterInput | null > | null,
  or?: Array< ModelStaffTasksFilterInput | null > | null,
  not?: ModelStaffTasksFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPatientAppointmentsFilterInput = {
  id?: ModelIDInput | null,
  patientId?: ModelIDInput | null,
  appointmentId?: ModelIDInput | null,
  and?: Array< ModelPatientAppointmentsFilterInput | null > | null,
  or?: Array< ModelPatientAppointmentsFilterInput | null > | null,
  not?: ModelPatientAppointmentsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStaffRosterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  staffID?: ModelSubscriptionIDInput | null,
  start_date?: ModelSubscriptionStringInput | null,
  end_date?: ModelSubscriptionStringInput | null,
  on_duty?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionStaffRosterFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffRosterFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sender_id?: ModelSubscriptionIDInput | null,
  receiver_id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  date_created?: ModelSubscriptionStringInput | null,
  date_due?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  date_of_birth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStaffFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStaffFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAppointmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  appointment_date?: ModelSubscriptionStringInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  start_time?: ModelSubscriptionStringInput | null,
  end_time?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  assigned_to?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStaffMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  messageId?: ModelSubscriptionIDInput | null,
  staffId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStaffMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffMessagesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStaffTasksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  taskId?: ModelSubscriptionIDInput | null,
  staffId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStaffTasksFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffTasksFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPatientAppointmentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  patientId?: ModelSubscriptionIDInput | null,
  appointmentId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPatientAppointmentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientAppointmentsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateStaffRosterMutationVariables = {
  input: CreateStaffRosterInput,
  condition?: ModelStaffRosterConditionInput | null,
};

export type CreateStaffRosterMutation = {
  createStaffRoster?:  {
    __typename: "StaffRoster",
    id: string,
    staffID: string,
    start_date?: string | null,
    end_date?: string | null,
    on_duty?: boolean | null,
    staff?:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStaffRosterMutationVariables = {
  input: UpdateStaffRosterInput,
  condition?: ModelStaffRosterConditionInput | null,
};

export type UpdateStaffRosterMutation = {
  updateStaffRoster?:  {
    __typename: "StaffRoster",
    id: string,
    staffID: string,
    start_date?: string | null,
    end_date?: string | null,
    on_duty?: boolean | null,
    staff?:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStaffRosterMutationVariables = {
  input: DeleteStaffRosterInput,
  condition?: ModelStaffRosterConditionInput | null,
};

export type DeleteStaffRosterMutation = {
  deleteStaffRoster?:  {
    __typename: "StaffRoster",
    id: string,
    staffID: string,
    start_date?: string | null,
    end_date?: string | null,
    on_duty?: boolean | null,
    staff?:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    sender_id: string,
    receiver_id: string,
    message: string,
    created_at: string,
    staff?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    sender_id: string,
    receiver_id: string,
    message: string,
    created_at: string,
    staff?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    sender_id: string,
    receiver_id: string,
    message: string,
    created_at: string,
    staff?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePatientMutationVariables = {
  input: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    date_of_birth?: string | null,
    gender?: string | null,
    appointments?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    date_of_birth?: string | null,
    gender?: string | null,
    appointments?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePatientMutationVariables = {
  input: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    date_of_birth?: string | null,
    gender?: string | null,
    appointments?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStaffMutationVariables = {
  input: CreateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type CreateStaffMutation = {
  createStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    username?: string | null,
    phone_number?: string | null,
    role?: StaffRoleEnum | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roster?:  {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStaffMutationVariables = {
  input: UpdateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type UpdateStaffMutation = {
  updateStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    username?: string | null,
    phone_number?: string | null,
    role?: StaffRoleEnum | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roster?:  {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStaffMutationVariables = {
  input: DeleteStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type DeleteStaffMutation = {
  deleteStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    username?: string | null,
    phone_number?: string | null,
    role?: StaffRoleEnum | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roster?:  {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patients?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patients?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patients?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStaffMessagesMutationVariables = {
  input: CreateStaffMessagesInput,
  condition?: ModelStaffMessagesConditionInput | null,
};

export type CreateStaffMessagesMutation = {
  createStaffMessages?:  {
    __typename: "StaffMessages",
    id: string,
    messageId: string,
    staffId: string,
    message:  {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStaffMessagesMutationVariables = {
  input: UpdateStaffMessagesInput,
  condition?: ModelStaffMessagesConditionInput | null,
};

export type UpdateStaffMessagesMutation = {
  updateStaffMessages?:  {
    __typename: "StaffMessages",
    id: string,
    messageId: string,
    staffId: string,
    message:  {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStaffMessagesMutationVariables = {
  input: DeleteStaffMessagesInput,
  condition?: ModelStaffMessagesConditionInput | null,
};

export type DeleteStaffMessagesMutation = {
  deleteStaffMessages?:  {
    __typename: "StaffMessages",
    id: string,
    messageId: string,
    staffId: string,
    message:  {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStaffTasksMutationVariables = {
  input: CreateStaffTasksInput,
  condition?: ModelStaffTasksConditionInput | null,
};

export type CreateStaffTasksMutation = {
  createStaffTasks?:  {
    __typename: "StaffTasks",
    id: string,
    taskId: string,
    staffId: string,
    task:  {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStaffTasksMutationVariables = {
  input: UpdateStaffTasksInput,
  condition?: ModelStaffTasksConditionInput | null,
};

export type UpdateStaffTasksMutation = {
  updateStaffTasks?:  {
    __typename: "StaffTasks",
    id: string,
    taskId: string,
    staffId: string,
    task:  {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStaffTasksMutationVariables = {
  input: DeleteStaffTasksInput,
  condition?: ModelStaffTasksConditionInput | null,
};

export type DeleteStaffTasksMutation = {
  deleteStaffTasks?:  {
    __typename: "StaffTasks",
    id: string,
    taskId: string,
    staffId: string,
    task:  {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePatientAppointmentsMutationVariables = {
  input: CreatePatientAppointmentsInput,
  condition?: ModelPatientAppointmentsConditionInput | null,
};

export type CreatePatientAppointmentsMutation = {
  createPatientAppointments?:  {
    __typename: "PatientAppointments",
    id: string,
    patientId: string,
    appointmentId: string,
    patient:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    appointment:  {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePatientAppointmentsMutationVariables = {
  input: UpdatePatientAppointmentsInput,
  condition?: ModelPatientAppointmentsConditionInput | null,
};

export type UpdatePatientAppointmentsMutation = {
  updatePatientAppointments?:  {
    __typename: "PatientAppointments",
    id: string,
    patientId: string,
    appointmentId: string,
    patient:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    appointment:  {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePatientAppointmentsMutationVariables = {
  input: DeletePatientAppointmentsInput,
  condition?: ModelPatientAppointmentsConditionInput | null,
};

export type DeletePatientAppointmentsMutation = {
  deletePatientAppointments?:  {
    __typename: "PatientAppointments",
    id: string,
    patientId: string,
    appointmentId: string,
    patient:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    appointment:  {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetStaffRosterQueryVariables = {
  id: string,
};

export type GetStaffRosterQuery = {
  getStaffRoster?:  {
    __typename: "StaffRoster",
    id: string,
    staffID: string,
    start_date?: string | null,
    end_date?: string | null,
    on_duty?: boolean | null,
    staff?:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStaffRostersQueryVariables = {
  filter?: ModelStaffRosterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffRostersQuery = {
  listStaffRosters?:  {
    __typename: "ModelStaffRosterConnection",
    items:  Array< {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStaffRostersQueryVariables = {
  filter?: ModelStaffRosterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStaffRostersQuery = {
  syncStaffRosters?:  {
    __typename: "ModelStaffRosterConnection",
    items:  Array< {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    sender_id: string,
    receiver_id: string,
    message: string,
    created_at: string,
    staff?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPatientQueryVariables = {
  id: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    date_of_birth?: string | null,
    gender?: string | null,
    appointments?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPatientsQuery = {
  syncPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStaffQueryVariables = {
  id: string,
};

export type GetStaffQuery = {
  getStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    username?: string | null,
    phone_number?: string | null,
    role?: StaffRoleEnum | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roster?:  {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStaffQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffQuery = {
  listStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStaffQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStaffQuery = {
  syncStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patients?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppointmentsQuery = {
  syncAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStaffMessagesQueryVariables = {
  id: string,
};

export type GetStaffMessagesQuery = {
  getStaffMessages?:  {
    __typename: "StaffMessages",
    id: string,
    messageId: string,
    staffId: string,
    message:  {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStaffMessagesQueryVariables = {
  filter?: ModelStaffMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffMessagesQuery = {
  listStaffMessages?:  {
    __typename: "ModelStaffMessagesConnection",
    items:  Array< {
      __typename: "StaffMessages",
      id: string,
      messageId: string,
      staffId: string,
      message:  {
        __typename: "Message",
        id: string,
        sender_id: string,
        receiver_id: string,
        message: string,
        created_at: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStaffMessagesQueryVariables = {
  filter?: ModelStaffMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStaffMessagesQuery = {
  syncStaffMessages?:  {
    __typename: "ModelStaffMessagesConnection",
    items:  Array< {
      __typename: "StaffMessages",
      id: string,
      messageId: string,
      staffId: string,
      message:  {
        __typename: "Message",
        id: string,
        sender_id: string,
        receiver_id: string,
        message: string,
        created_at: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStaffTasksQueryVariables = {
  id: string,
};

export type GetStaffTasksQuery = {
  getStaffTasks?:  {
    __typename: "StaffTasks",
    id: string,
    taskId: string,
    staffId: string,
    task:  {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStaffTasksQueryVariables = {
  filter?: ModelStaffTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffTasksQuery = {
  listStaffTasks?:  {
    __typename: "ModelStaffTasksConnection",
    items:  Array< {
      __typename: "StaffTasks",
      id: string,
      taskId: string,
      staffId: string,
      task:  {
        __typename: "Task",
        id: string,
        title?: string | null,
        date_created?: string | null,
        date_due?: string | null,
        details?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStaffTasksQueryVariables = {
  filter?: ModelStaffTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStaffTasksQuery = {
  syncStaffTasks?:  {
    __typename: "ModelStaffTasksConnection",
    items:  Array< {
      __typename: "StaffTasks",
      id: string,
      taskId: string,
      staffId: string,
      task:  {
        __typename: "Task",
        id: string,
        title?: string | null,
        date_created?: string | null,
        date_due?: string | null,
        details?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPatientAppointmentsQueryVariables = {
  id: string,
};

export type GetPatientAppointmentsQuery = {
  getPatientAppointments?:  {
    __typename: "PatientAppointments",
    id: string,
    patientId: string,
    appointmentId: string,
    patient:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    appointment:  {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPatientAppointmentsQueryVariables = {
  filter?: ModelPatientAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientAppointmentsQuery = {
  listPatientAppointments?:  {
    __typename: "ModelPatientAppointmentsConnection",
    items:  Array< {
      __typename: "PatientAppointments",
      id: string,
      patientId: string,
      appointmentId: string,
      patient:  {
        __typename: "Patient",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        phone_number?: string | null,
        date_of_birth?: string | null,
        gender?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      appointment:  {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPatientAppointmentsQueryVariables = {
  filter?: ModelPatientAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPatientAppointmentsQuery = {
  syncPatientAppointments?:  {
    __typename: "ModelPatientAppointmentsConnection",
    items:  Array< {
      __typename: "PatientAppointments",
      id: string,
      patientId: string,
      appointmentId: string,
      patient:  {
        __typename: "Patient",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        phone_number?: string | null,
        date_of_birth?: string | null,
        gender?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      appointment:  {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type StaffMessagesByMessageIdQueryVariables = {
  messageId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffMessagesByMessageIdQuery = {
  staffMessagesByMessageId?:  {
    __typename: "ModelStaffMessagesConnection",
    items:  Array< {
      __typename: "StaffMessages",
      id: string,
      messageId: string,
      staffId: string,
      message:  {
        __typename: "Message",
        id: string,
        sender_id: string,
        receiver_id: string,
        message: string,
        created_at: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type StaffMessagesByStaffIdQueryVariables = {
  staffId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffMessagesByStaffIdQuery = {
  staffMessagesByStaffId?:  {
    __typename: "ModelStaffMessagesConnection",
    items:  Array< {
      __typename: "StaffMessages",
      id: string,
      messageId: string,
      staffId: string,
      message:  {
        __typename: "Message",
        id: string,
        sender_id: string,
        receiver_id: string,
        message: string,
        created_at: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type StaffTasksByTaskIdQueryVariables = {
  taskId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffTasksByTaskIdQuery = {
  staffTasksByTaskId?:  {
    __typename: "ModelStaffTasksConnection",
    items:  Array< {
      __typename: "StaffTasks",
      id: string,
      taskId: string,
      staffId: string,
      task:  {
        __typename: "Task",
        id: string,
        title?: string | null,
        date_created?: string | null,
        date_due?: string | null,
        details?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type StaffTasksByStaffIdQueryVariables = {
  staffId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffTasksByStaffIdQuery = {
  staffTasksByStaffId?:  {
    __typename: "ModelStaffTasksConnection",
    items:  Array< {
      __typename: "StaffTasks",
      id: string,
      taskId: string,
      staffId: string,
      task:  {
        __typename: "Task",
        id: string,
        title?: string | null,
        date_created?: string | null,
        date_due?: string | null,
        details?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      staff:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PatientAppointmentsByPatientIdQueryVariables = {
  patientId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientAppointmentsByPatientIdQuery = {
  patientAppointmentsByPatientId?:  {
    __typename: "ModelPatientAppointmentsConnection",
    items:  Array< {
      __typename: "PatientAppointments",
      id: string,
      patientId: string,
      appointmentId: string,
      patient:  {
        __typename: "Patient",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        phone_number?: string | null,
        date_of_birth?: string | null,
        gender?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      appointment:  {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PatientAppointmentsByAppointmentIdQueryVariables = {
  appointmentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientAppointmentsByAppointmentIdQuery = {
  patientAppointmentsByAppointmentId?:  {
    __typename: "ModelPatientAppointmentsConnection",
    items:  Array< {
      __typename: "PatientAppointments",
      id: string,
      patientId: string,
      appointmentId: string,
      patient:  {
        __typename: "Patient",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        phone_number?: string | null,
        date_of_birth?: string | null,
        gender?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      appointment:  {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateStaffRosterSubscriptionVariables = {
  filter?: ModelSubscriptionStaffRosterFilterInput | null,
};

export type OnCreateStaffRosterSubscription = {
  onCreateStaffRoster?:  {
    __typename: "StaffRoster",
    id: string,
    staffID: string,
    start_date?: string | null,
    end_date?: string | null,
    on_duty?: boolean | null,
    staff?:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStaffRosterSubscriptionVariables = {
  filter?: ModelSubscriptionStaffRosterFilterInput | null,
};

export type OnUpdateStaffRosterSubscription = {
  onUpdateStaffRoster?:  {
    __typename: "StaffRoster",
    id: string,
    staffID: string,
    start_date?: string | null,
    end_date?: string | null,
    on_duty?: boolean | null,
    staff?:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStaffRosterSubscriptionVariables = {
  filter?: ModelSubscriptionStaffRosterFilterInput | null,
};

export type OnDeleteStaffRosterSubscription = {
  onDeleteStaffRoster?:  {
    __typename: "StaffRoster",
    id: string,
    staffID: string,
    start_date?: string | null,
    end_date?: string | null,
    on_duty?: boolean | null,
    staff?:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    sender_id: string,
    receiver_id: string,
    message: string,
    created_at: string,
    staff?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    sender_id: string,
    receiver_id: string,
    message: string,
    created_at: string,
    staff?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    sender_id: string,
    receiver_id: string,
    message: string,
    created_at: string,
    staff?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    date_of_birth?: string | null,
    gender?: string | null,
    appointments?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    date_of_birth?: string | null,
    gender?: string | null,
    appointments?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    date_of_birth?: string | null,
    gender?: string | null,
    appointments?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnCreateStaffSubscription = {
  onCreateStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    username?: string | null,
    phone_number?: string | null,
    role?: StaffRoleEnum | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roster?:  {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnUpdateStaffSubscription = {
  onUpdateStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    username?: string | null,
    phone_number?: string | null,
    role?: StaffRoleEnum | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roster?:  {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnDeleteStaffSubscription = {
  onDeleteStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    username?: string | null,
    phone_number?: string | null,
    role?: StaffRoleEnum | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        taskId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messages?:  {
      __typename: "ModelStaffMessagesConnection",
      items:  Array< {
        __typename: "StaffMessages",
        id: string,
        messageId: string,
        staffId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roster?:  {
      __typename: "StaffRoster",
      id: string,
      staffID: string,
      start_date?: string | null,
      end_date?: string | null,
      on_duty?: boolean | null,
      staff?:  {
        __typename: "Staff",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: StaffRoleEnum | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patients?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patients?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patients?:  {
      __typename: "ModelPatientAppointmentsConnection",
      items:  Array< {
        __typename: "PatientAppointments",
        id: string,
        patientId: string,
        appointmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStaffMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionStaffMessagesFilterInput | null,
};

export type OnCreateStaffMessagesSubscription = {
  onCreateStaffMessages?:  {
    __typename: "StaffMessages",
    id: string,
    messageId: string,
    staffId: string,
    message:  {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStaffMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionStaffMessagesFilterInput | null,
};

export type OnUpdateStaffMessagesSubscription = {
  onUpdateStaffMessages?:  {
    __typename: "StaffMessages",
    id: string,
    messageId: string,
    staffId: string,
    message:  {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStaffMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionStaffMessagesFilterInput | null,
};

export type OnDeleteStaffMessagesSubscription = {
  onDeleteStaffMessages?:  {
    __typename: "StaffMessages",
    id: string,
    messageId: string,
    staffId: string,
    message:  {
      __typename: "Message",
      id: string,
      sender_id: string,
      receiver_id: string,
      message: string,
      created_at: string,
      staff?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStaffTasksSubscriptionVariables = {
  filter?: ModelSubscriptionStaffTasksFilterInput | null,
};

export type OnCreateStaffTasksSubscription = {
  onCreateStaffTasks?:  {
    __typename: "StaffTasks",
    id: string,
    taskId: string,
    staffId: string,
    task:  {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStaffTasksSubscriptionVariables = {
  filter?: ModelSubscriptionStaffTasksFilterInput | null,
};

export type OnUpdateStaffTasksSubscription = {
  onUpdateStaffTasks?:  {
    __typename: "StaffTasks",
    id: string,
    taskId: string,
    staffId: string,
    task:  {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStaffTasksSubscriptionVariables = {
  filter?: ModelSubscriptionStaffTasksFilterInput | null,
};

export type OnDeleteStaffTasksSubscription = {
  onDeleteStaffTasks?:  {
    __typename: "StaffTasks",
    id: string,
    taskId: string,
    staffId: string,
    task:  {
      __typename: "Task",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    staff:  {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      username?: string | null,
      phone_number?: string | null,
      role?: StaffRoleEnum | null,
      appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelStaffTasksConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messages?:  {
        __typename: "ModelStaffMessagesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      roster?:  {
        __typename: "StaffRoster",
        id: string,
        staffID: string,
        start_date?: string | null,
        end_date?: string | null,
        on_duty?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePatientAppointmentsSubscriptionVariables = {
  filter?: ModelSubscriptionPatientAppointmentsFilterInput | null,
};

export type OnCreatePatientAppointmentsSubscription = {
  onCreatePatientAppointments?:  {
    __typename: "PatientAppointments",
    id: string,
    patientId: string,
    appointmentId: string,
    patient:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    appointment:  {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePatientAppointmentsSubscriptionVariables = {
  filter?: ModelSubscriptionPatientAppointmentsFilterInput | null,
};

export type OnUpdatePatientAppointmentsSubscription = {
  onUpdatePatientAppointments?:  {
    __typename: "PatientAppointments",
    id: string,
    patientId: string,
    appointmentId: string,
    patient:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    appointment:  {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePatientAppointmentsSubscriptionVariables = {
  filter?: ModelSubscriptionPatientAppointmentsFilterInput | null,
};

export type OnDeletePatientAppointmentsSubscription = {
  onDeletePatientAppointments?:  {
    __typename: "PatientAppointments",
    id: string,
    patientId: string,
    appointmentId: string,
    patient:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email?: string | null,
      phone_number?: string | null,
      date_of_birth?: string | null,
      gender?: string | null,
      appointments?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    appointment:  {
      __typename: "Appointment",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patients?:  {
        __typename: "ModelPatientAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
