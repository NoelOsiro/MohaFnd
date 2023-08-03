import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum StaffRoleEnum {
  DOCTOR = "DOCTOR",
  RECEPTIONIST = "RECEPTIONIST",
  NURSE = "NURSE",
  NURSEAID = "NURSEAID",
  ASSISTANT = "ASSISTANT"
}

export enum AppointmentStatusEnum {
  DONE = "DONE",
  PENDING = "PENDING",
  MISSED = "MISSED",
  RESCHEDULED = "RESCHEDULED"
}



type EagerStaffRoster = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StaffRoster, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly staffID: string;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly on_duty?: boolean | null;
  readonly staff?: Staff | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStaffRoster = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StaffRoster, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly staffID: string;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly on_duty?: boolean | null;
  readonly staff: AsyncItem<Staff | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StaffRoster = LazyLoading extends LazyLoadingDisabled ? EagerStaffRoster : LazyStaffRoster

export declare const StaffRoster: (new (init: ModelInit<StaffRoster>) => StaffRoster) & {
  copyOf(source: StaffRoster, mutator: (draft: MutableModel<StaffRoster>) => MutableModel<StaffRoster> | void): StaffRoster;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender_id: string;
  readonly receiver_id: string;
  readonly message: string;
  readonly created_at: string;
  readonly staff?: (StaffMessages | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender_id: string;
  readonly receiver_id: string;
  readonly message: string;
  readonly created_at: string;
  readonly staff: AsyncCollection<StaffMessages>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly date_created?: string | null;
  readonly date_due?: string | null;
  readonly details?: string | null;
  readonly staff?: (StaffTasks | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly date_created?: string | null;
  readonly date_due?: string | null;
  readonly details?: string | null;
  readonly staff: AsyncCollection<StaffTasks>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly date_of_birth?: string | null;
  readonly gender?: string | null;
  readonly appointments?: (PatientAppointments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly date_of_birth?: string | null;
  readonly gender?: string | null;
  readonly appointments: AsyncCollection<PatientAppointments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

type EagerStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly phone_number?: string | null;
  readonly role?: StaffRoleEnum | keyof typeof StaffRoleEnum | null;
  readonly appointments?: (Appointment | null)[] | null;
  readonly tasks?: (StaffTasks | null)[] | null;
  readonly messages?: (StaffMessages | null)[] | null;
  readonly roster?: StaffRoster | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly phone_number?: string | null;
  readonly role?: StaffRoleEnum | keyof typeof StaffRoleEnum | null;
  readonly appointments: AsyncCollection<Appointment>;
  readonly tasks: AsyncCollection<StaffTasks>;
  readonly messages: AsyncCollection<StaffMessages>;
  readonly roster: AsyncItem<StaffRoster | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Staff = LazyLoading extends LazyLoadingDisabled ? EagerStaff : LazyStaff

export declare const Staff: (new (init: ModelInit<Staff>) => Staff) & {
  copyOf(source: Staff, mutator: (draft: MutableModel<Staff>) => MutableModel<Staff> | void): Staff;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly appointment_date?: string | null;
  readonly created_at?: string | null;
  readonly start_time?: string | null;
  readonly end_time?: string | null;
  readonly status?: AppointmentStatusEnum | keyof typeof AppointmentStatusEnum | null;
  readonly assigned_to?: string | null;
  readonly patients?: (PatientAppointments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly appointment_date?: string | null;
  readonly created_at?: string | null;
  readonly start_time?: string | null;
  readonly end_time?: string | null;
  readonly status?: AppointmentStatusEnum | keyof typeof AppointmentStatusEnum | null;
  readonly assigned_to?: string | null;
  readonly patients: AsyncCollection<PatientAppointments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerStaffMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StaffMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messageId?: string | null;
  readonly staffId?: string | null;
  readonly message: Message;
  readonly staff: Staff;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStaffMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StaffMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messageId?: string | null;
  readonly staffId?: string | null;
  readonly message: AsyncItem<Message>;
  readonly staff: AsyncItem<Staff>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StaffMessages = LazyLoading extends LazyLoadingDisabled ? EagerStaffMessages : LazyStaffMessages

export declare const StaffMessages: (new (init: ModelInit<StaffMessages>) => StaffMessages) & {
  copyOf(source: StaffMessages, mutator: (draft: MutableModel<StaffMessages>) => MutableModel<StaffMessages> | void): StaffMessages;
}

type EagerStaffTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StaffTasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskId?: string | null;
  readonly staffId?: string | null;
  readonly task: Task;
  readonly staff: Staff;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStaffTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StaffTasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskId?: string | null;
  readonly staffId?: string | null;
  readonly task: AsyncItem<Task>;
  readonly staff: AsyncItem<Staff>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StaffTasks = LazyLoading extends LazyLoadingDisabled ? EagerStaffTasks : LazyStaffTasks

export declare const StaffTasks: (new (init: ModelInit<StaffTasks>) => StaffTasks) & {
  copyOf(source: StaffTasks, mutator: (draft: MutableModel<StaffTasks>) => MutableModel<StaffTasks> | void): StaffTasks;
}

type EagerPatientAppointments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientAppointments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly patientId?: string | null;
  readonly appointmentId?: string | null;
  readonly patient: Patient;
  readonly appointment: Appointment;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPatientAppointments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientAppointments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly patientId?: string | null;
  readonly appointmentId?: string | null;
  readonly patient: AsyncItem<Patient>;
  readonly appointment: AsyncItem<Appointment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PatientAppointments = LazyLoading extends LazyLoadingDisabled ? EagerPatientAppointments : LazyPatientAppointments

export declare const PatientAppointments: (new (init: ModelInit<PatientAppointments>) => PatientAppointments) & {
  copyOf(source: PatientAppointments, mutator: (draft: MutableModel<PatientAppointments>) => MutableModel<PatientAppointments> | void): PatientAppointments;
}