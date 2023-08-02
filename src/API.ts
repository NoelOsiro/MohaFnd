/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTasksInput = {
  id?: string | null,
  title?: string | null,
  date_created?: string | null,
  date_due?: string | null,
  details?: string | null,
  _version?: number | null,
};

export type ModelTasksConditionInput = {
  title?: ModelStringInput | null,
  date_created?: ModelStringInput | null,
  date_due?: ModelStringInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelTasksConditionInput | null > | null,
  or?: Array< ModelTasksConditionInput | null > | null,
  not?: ModelTasksConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Tasks = {
  __typename: "Tasks",
  id: string,
  title?: string | null,
  date_created?: string | null,
  date_due?: string | null,
  details?: string | null,
  staff_assigned?: ModelStaffTasksConnection | null,
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
  tasksId: string,
  staffId: string,
  tasks: Tasks,
  staff: Staff,
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
  email: string,
  username?: string | null,
  phone_number: string,
  role?: StaffRoleEnum | null,
  staff_appointments?: ModelAppointmentsConnection | null,
  tasks?: ModelStaffTasksConnection | null,
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


export type ModelAppointmentsConnection = {
  __typename: "ModelAppointmentsConnection",
  items:  Array<Appointments | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Appointments = {
  __typename: "Appointments",
  id: string,
  appointment_date?: string | null,
  created_at?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  status?: AppointmentStatusEnum | null,
  assigned_to?: string | null,
  patientID: string,
  staffID: string,
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


export type UpdateTasksInput = {
  id: string,
  title?: string | null,
  date_created?: string | null,
  date_due?: string | null,
  details?: string | null,
  _version?: number | null,
};

export type DeleteTasksInput = {
  id: string,
  _version?: number | null,
};

export type CreateStaffInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email: string,
  username?: string | null,
  phone_number: string,
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

export type CreateAppointmentsInput = {
  id?: string | null,
  appointment_date?: string | null,
  created_at?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  status?: AppointmentStatusEnum | null,
  assigned_to?: string | null,
  patientID: string,
  staffID: string,
  _version?: number | null,
};

export type ModelAppointmentsConditionInput = {
  appointment_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  status?: ModelAppointmentStatusEnumInput | null,
  assigned_to?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  staffID?: ModelIDInput | null,
  and?: Array< ModelAppointmentsConditionInput | null > | null,
  or?: Array< ModelAppointmentsConditionInput | null > | null,
  not?: ModelAppointmentsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAppointmentStatusEnumInput = {
  eq?: AppointmentStatusEnum | null,
  ne?: AppointmentStatusEnum | null,
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

export type UpdateAppointmentsInput = {
  id: string,
  appointment_date?: string | null,
  created_at?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  status?: AppointmentStatusEnum | null,
  assigned_to?: string | null,
  patientID?: string | null,
  staffID?: string | null,
  _version?: number | null,
};

export type DeleteAppointmentsInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email: string,
  date_of_birth: string,
  phone_number: string,
  gender?: string | null,
  _version?: number | null,
};

export type ModelPatientConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  date_of_birth?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email: string,
  date_of_birth: string,
  phone_number: string,
  pat_appointments?: ModelAppointmentsConnection | null,
  gender?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePatientInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  date_of_birth?: string | null,
  phone_number?: string | null,
  gender?: string | null,
  _version?: number | null,
};

export type DeletePatientInput = {
  id: string,
  _version?: number | null,
};

export type CreateStaffTasksInput = {
  id?: string | null,
  tasksId: string,
  staffId: string,
  _version?: number | null,
};

export type ModelStaffTasksConditionInput = {
  tasksId?: ModelIDInput | null,
  staffId?: ModelIDInput | null,
  and?: Array< ModelStaffTasksConditionInput | null > | null,
  or?: Array< ModelStaffTasksConditionInput | null > | null,
  not?: ModelStaffTasksConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateStaffTasksInput = {
  id: string,
  tasksId?: string | null,
  staffId?: string | null,
  _version?: number | null,
};

export type DeleteStaffTasksInput = {
  id: string,
  _version?: number | null,
};

export type ModelTasksFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date_created?: ModelStringInput | null,
  date_due?: ModelStringInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelTasksFilterInput | null > | null,
  or?: Array< ModelTasksFilterInput | null > | null,
  not?: ModelTasksFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTasksConnection = {
  __typename: "ModelTasksConnection",
  items:  Array<Tasks | null >,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStaffConnection = {
  __typename: "ModelStaffConnection",
  items:  Array<Staff | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppointmentsFilterInput = {
  id?: ModelIDInput | null,
  appointment_date?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  status?: ModelAppointmentStatusEnumInput | null,
  assigned_to?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  staffID?: ModelIDInput | null,
  and?: Array< ModelAppointmentsFilterInput | null > | null,
  or?: Array< ModelAppointmentsFilterInput | null > | null,
  not?: ModelAppointmentsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  date_of_birth?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
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

export type ModelStaffTasksFilterInput = {
  id?: ModelIDInput | null,
  tasksId?: ModelIDInput | null,
  staffId?: ModelIDInput | null,
  and?: Array< ModelStaffTasksFilterInput | null > | null,
  or?: Array< ModelStaffTasksFilterInput | null > | null,
  not?: ModelStaffTasksFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTasksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  date_created?: ModelSubscriptionStringInput | null,
  date_due?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTasksFilterInput | null > | null,
  or?: Array< ModelSubscriptionTasksFilterInput | null > | null,
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

export type ModelSubscriptionAppointmentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  appointment_date?: ModelSubscriptionStringInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  start_time?: ModelSubscriptionStringInput | null,
  end_time?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  assigned_to?: ModelSubscriptionStringInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  staffID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppointmentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  date_of_birth?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStaffTasksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tasksId?: ModelSubscriptionIDInput | null,
  staffId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStaffTasksFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffTasksFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateTasksMutationVariables = {
  input: CreateTasksInput,
  condition?: ModelTasksConditionInput | null,
};

export type CreateTasksMutation = {
  createTasks?:  {
    __typename: "Tasks",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff_assigned?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        tasksId: string,
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

export type UpdateTasksMutationVariables = {
  input: UpdateTasksInput,
  condition?: ModelTasksConditionInput | null,
};

export type UpdateTasksMutation = {
  updateTasks?:  {
    __typename: "Tasks",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff_assigned?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        tasksId: string,
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

export type DeleteTasksMutationVariables = {
  input: DeleteTasksInput,
  condition?: ModelTasksConditionInput | null,
};

export type DeleteTasksMutation = {
  deleteTasks?:  {
    __typename: "Tasks",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff_assigned?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        tasksId: string,
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
    email: string,
    username?: string | null,
    phone_number: string,
    role?: StaffRoleEnum | null,
    staff_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
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
        tasksId: string,
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
    email: string,
    username?: string | null,
    phone_number: string,
    role?: StaffRoleEnum | null,
    staff_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
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
        tasksId: string,
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
    email: string,
    username?: string | null,
    phone_number: string,
    role?: StaffRoleEnum | null,
    staff_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
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
        tasksId: string,
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

export type CreateAppointmentsMutationVariables = {
  input: CreateAppointmentsInput,
  condition?: ModelAppointmentsConditionInput | null,
};

export type CreateAppointmentsMutation = {
  createAppointments?:  {
    __typename: "Appointments",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patientID: string,
    staffID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAppointmentsMutationVariables = {
  input: UpdateAppointmentsInput,
  condition?: ModelAppointmentsConditionInput | null,
};

export type UpdateAppointmentsMutation = {
  updateAppointments?:  {
    __typename: "Appointments",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patientID: string,
    staffID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAppointmentsMutationVariables = {
  input: DeleteAppointmentsInput,
  condition?: ModelAppointmentsConditionInput | null,
};

export type DeleteAppointmentsMutation = {
  deleteAppointments?:  {
    __typename: "Appointments",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patientID: string,
    staffID: string,
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
    email: string,
    date_of_birth: string,
    phone_number: string,
    pat_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    gender?: string | null,
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
    email: string,
    date_of_birth: string,
    phone_number: string,
    pat_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    gender?: string | null,
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
    email: string,
    date_of_birth: string,
    phone_number: string,
    pat_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    gender?: string | null,
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
    tasksId: string,
    staffId: string,
    tasks:  {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
    tasksId: string,
    staffId: string,
    tasks:  {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
    tasksId: string,
    staffId: string,
    tasks:  {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTasksQueryVariables = {
  id: string,
};

export type GetTasksQuery = {
  getTasks?:  {
    __typename: "Tasks",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff_assigned?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        tasksId: string,
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
  filter?: ModelTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTasksConnection",
    items:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
  filter?: ModelTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTasksConnection",
    items:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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

export type GetStaffQueryVariables = {
  id: string,
};

export type GetStaffQuery = {
  getStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email: string,
    username?: string | null,
    phone_number: string,
    role?: StaffRoleEnum | null,
    staff_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
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
        tasksId: string,
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

export type ListStaffQueryVariables = {
  id?: string | null,
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListStaffQuery = {
  listStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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

export type GetAppointmentsQueryVariables = {
  id: string,
};

export type GetAppointmentsQuery = {
  getAppointments?:  {
    __typename: "Appointments",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patientID: string,
    staffID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentsConnection",
    items:  Array< {
      __typename: "Appointments",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patientID: string,
      staffID: string,
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
  filter?: ModelAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppointmentsQuery = {
  syncAppointments?:  {
    __typename: "ModelAppointmentsConnection",
    items:  Array< {
      __typename: "Appointments",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patientID: string,
      staffID: string,
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
    email: string,
    date_of_birth: string,
    phone_number: string,
    pat_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPatientsQueryVariables = {
  id?: string | null,
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email: string,
      date_of_birth: string,
      phone_number: string,
      pat_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      gender?: string | null,
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
      email: string,
      date_of_birth: string,
      phone_number: string,
      pat_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      gender?: string | null,
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
    tasksId: string,
    staffId: string,
    tasks:  {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
      tasksId: string,
      staffId: string,
      tasks:  {
        __typename: "Tasks",
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
        email: string,
        username?: string | null,
        phone_number: string,
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
      tasksId: string,
      staffId: string,
      tasks:  {
        __typename: "Tasks",
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
        email: string,
        username?: string | null,
        phone_number: string,
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

export type StaffByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffByEmailQuery = {
  staffByEmail?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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

export type StaffByPhoneNumberQueryVariables = {
  phone_number: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffByPhoneNumberQuery = {
  staffByPhoneNumber?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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

export type AppointmentsByPatientIDQueryVariables = {
  patientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByPatientIDQuery = {
  appointmentsByPatientID?:  {
    __typename: "ModelAppointmentsConnection",
    items:  Array< {
      __typename: "Appointments",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patientID: string,
      staffID: string,
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

export type AppointmentsByStaffIDQueryVariables = {
  staffID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByStaffIDQuery = {
  appointmentsByStaffID?:  {
    __typename: "ModelAppointmentsConnection",
    items:  Array< {
      __typename: "Appointments",
      id: string,
      appointment_date?: string | null,
      created_at?: string | null,
      start_time?: string | null,
      end_time?: string | null,
      status?: AppointmentStatusEnum | null,
      assigned_to?: string | null,
      patientID: string,
      staffID: string,
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

export type PatientByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientByEmailQuery = {
  patientByEmail?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email: string,
      date_of_birth: string,
      phone_number: string,
      pat_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      gender?: string | null,
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

export type PatientByPhoneNumberQueryVariables = {
  phone_number: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientByPhoneNumberQuery = {
  patientByPhoneNumber?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      email: string,
      date_of_birth: string,
      phone_number: string,
      pat_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      gender?: string | null,
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

export type StaffTasksByTasksIdQueryVariables = {
  tasksId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StaffTasksByTasksIdQuery = {
  staffTasksByTasksId?:  {
    __typename: "ModelStaffTasksConnection",
    items:  Array< {
      __typename: "StaffTasks",
      id: string,
      tasksId: string,
      staffId: string,
      tasks:  {
        __typename: "Tasks",
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
        email: string,
        username?: string | null,
        phone_number: string,
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
      tasksId: string,
      staffId: string,
      tasks:  {
        __typename: "Tasks",
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
        email: string,
        username?: string | null,
        phone_number: string,
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

export type OnCreateTasksSubscriptionVariables = {
  filter?: ModelSubscriptionTasksFilterInput | null,
};

export type OnCreateTasksSubscription = {
  onCreateTasks?:  {
    __typename: "Tasks",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff_assigned?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        tasksId: string,
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

export type OnUpdateTasksSubscriptionVariables = {
  filter?: ModelSubscriptionTasksFilterInput | null,
};

export type OnUpdateTasksSubscription = {
  onUpdateTasks?:  {
    __typename: "Tasks",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff_assigned?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        tasksId: string,
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

export type OnDeleteTasksSubscriptionVariables = {
  filter?: ModelSubscriptionTasksFilterInput | null,
};

export type OnDeleteTasksSubscription = {
  onDeleteTasks?:  {
    __typename: "Tasks",
    id: string,
    title?: string | null,
    date_created?: string | null,
    date_due?: string | null,
    details?: string | null,
    staff_assigned?:  {
      __typename: "ModelStaffTasksConnection",
      items:  Array< {
        __typename: "StaffTasks",
        id: string,
        tasksId: string,
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

export type OnCreateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnCreateStaffSubscription = {
  onCreateStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email: string,
    username?: string | null,
    phone_number: string,
    role?: StaffRoleEnum | null,
    staff_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
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
        tasksId: string,
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

export type OnUpdateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnUpdateStaffSubscription = {
  onUpdateStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email: string,
    username?: string | null,
    phone_number: string,
    role?: StaffRoleEnum | null,
    staff_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
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
        tasksId: string,
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

export type OnDeleteStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnDeleteStaffSubscription = {
  onDeleteStaff?:  {
    __typename: "Staff",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    email: string,
    username?: string | null,
    phone_number: string,
    role?: StaffRoleEnum | null,
    staff_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
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
        tasksId: string,
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

export type OnCreateAppointmentsSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentsFilterInput | null,
};

export type OnCreateAppointmentsSubscription = {
  onCreateAppointments?:  {
    __typename: "Appointments",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patientID: string,
    staffID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAppointmentsSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentsFilterInput | null,
};

export type OnUpdateAppointmentsSubscription = {
  onUpdateAppointments?:  {
    __typename: "Appointments",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patientID: string,
    staffID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAppointmentsSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentsFilterInput | null,
};

export type OnDeleteAppointmentsSubscription = {
  onDeleteAppointments?:  {
    __typename: "Appointments",
    id: string,
    appointment_date?: string | null,
    created_at?: string | null,
    start_time?: string | null,
    end_time?: string | null,
    status?: AppointmentStatusEnum | null,
    assigned_to?: string | null,
    patientID: string,
    staffID: string,
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
    email: string,
    date_of_birth: string,
    phone_number: string,
    pat_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    gender?: string | null,
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
    email: string,
    date_of_birth: string,
    phone_number: string,
    pat_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    gender?: string | null,
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
    email: string,
    date_of_birth: string,
    phone_number: string,
    pat_appointments?:  {
      __typename: "ModelAppointmentsConnection",
      items:  Array< {
        __typename: "Appointments",
        id: string,
        appointment_date?: string | null,
        created_at?: string | null,
        start_time?: string | null,
        end_time?: string | null,
        status?: AppointmentStatusEnum | null,
        assigned_to?: string | null,
        patientID: string,
        staffID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    gender?: string | null,
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
    tasksId: string,
    staffId: string,
    tasks:  {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
    tasksId: string,
    staffId: string,
    tasks:  {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
    tasksId: string,
    staffId: string,
    tasks:  {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      date_created?: string | null,
      date_due?: string | null,
      details?: string | null,
      staff_assigned?:  {
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
      email: string,
      username?: string | null,
      phone_number: string,
      role?: StaffRoleEnum | null,
      staff_appointments?:  {
        __typename: "ModelAppointmentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
