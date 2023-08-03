// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StaffRoleEnum = {
  "DOCTOR": "DOCTOR",
  "RECEPTIONIST": "RECEPTIONIST",
  "NURSE": "NURSE",
  "NURSEAID": "NURSEAID",
  "ASSISTANT": "ASSISTANT"
};

const AppointmentStatusEnum = {
  "DONE": "DONE",
  "PENDING": "PENDING",
  "MISSED": "MISSED",
  "RESCHEDULED": "RESCHEDULED"
};

const { StaffRoster, Message, Task, Patient, Staff, Appointment, StaffMessages, StaffTasks, PatientAppointments } = initSchema(schema);

export {
  StaffRoster,
  Message,
  Task,
  Patient,
  Staff,
  Appointment,
  StaffMessages,
  StaffTasks,
  PatientAppointments,
  StaffRoleEnum,
  AppointmentStatusEnum
};