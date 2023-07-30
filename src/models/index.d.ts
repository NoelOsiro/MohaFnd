import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

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
  readonly staff_appointments?: (Appointments | null)[] | null;
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
  readonly staff_appointments: AsyncCollection<Appointments>;
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
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly date_of_birth?: string | null;
  readonly phone_number?: string | null;
  readonly pat_appointments?: (Appointments | null)[] | null;
  readonly gender?: string | null;
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
  readonly date_of_birth?: string | null;
  readonly phone_number?: string | null;
  readonly pat_appointments: AsyncCollection<Appointments>;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}