import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

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



type EagerTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly date_created?: string | null;
  readonly date_due?: string | null;
  readonly details?: string | null;
  readonly staff_assigned?: (StaffTasks | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly date_created?: string | null;
  readonly date_due?: string | null;
  readonly details?: string | null;
  readonly staff_assigned: AsyncCollection<StaffTasks>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tasks = LazyLoading extends LazyLoadingDisabled ? EagerTasks : LazyTasks

export declare const Tasks: (new (init: ModelInit<Tasks>) => Tasks) & {
  copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}

type EagerStaff = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email: string;
  readonly username?: string | null;
  readonly phone_number: string;
  readonly role?: StaffRoleEnum | keyof typeof StaffRoleEnum | null;
  readonly staff_appointments?: (Appointments | null)[] | null;
  readonly tasks?: (StaffTasks | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStaff = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email: string;
  readonly username?: string | null;
  readonly phone_number: string;
  readonly role?: StaffRoleEnum | keyof typeof StaffRoleEnum | null;
  readonly staff_appointments: AsyncCollection<Appointments>;
  readonly tasks: AsyncCollection<StaffTasks>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Staff = LazyLoading extends LazyLoadingDisabled ? EagerStaff : LazyStaff

export declare const Staff: (new (init: ModelInit<Staff>) => Staff) & {
  copyOf(source: Staff, mutator: (draft: MutableModel<Staff>) => MutableModel<Staff> | void): Staff;
}

type EagerAppointments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly appointment_date?: string | null;
  readonly created_at?: string | null;
  readonly start_time?: string | null;
  readonly end_time?: string | null;
  readonly status?: AppointmentStatusEnum | keyof typeof AppointmentStatusEnum | null;
  readonly assigned_to?: string | null;
  readonly patientID: string;
  readonly staffID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppointments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly appointment_date?: string | null;
  readonly created_at?: string | null;
  readonly start_time?: string | null;
  readonly end_time?: string | null;
  readonly status?: AppointmentStatusEnum | keyof typeof AppointmentStatusEnum | null;
  readonly assigned_to?: string | null;
  readonly patientID: string;
  readonly staffID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Appointments = LazyLoading extends LazyLoadingDisabled ? EagerAppointments : LazyAppointments

export declare const Appointments: (new (init: ModelInit<Appointments>) => Appointments) & {
  copyOf(source: Appointments, mutator: (draft: MutableModel<Appointments>) => MutableModel<Appointments> | void): Appointments;
}

type EagerPatient = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email: string;
  readonly date_of_birth: string;
  readonly phone_number: string;
  readonly pat_appointments?: (Appointments | null)[] | null;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPatient = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email: string;
  readonly date_of_birth: string;
  readonly phone_number: string;
  readonly pat_appointments: AsyncCollection<Appointments>;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

type EagerStaffTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StaffTasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tasksId?: string | null;
  readonly staffId?: string | null;
  readonly tasks: Tasks;
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
  readonly tasksId?: string | null;
  readonly staffId?: string | null;
  readonly tasks: AsyncItem<Tasks>;
  readonly staff: AsyncItem<Staff>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StaffTasks = LazyLoading extends LazyLoadingDisabled ? EagerStaffTasks : LazyStaffTasks

export declare const StaffTasks: (new (init: ModelInit<StaffTasks>) => StaffTasks) & {
  copyOf(source: StaffTasks, mutator: (draft: MutableModel<StaffTasks>) => MutableModel<StaffTasks> | void): StaffTasks;
}