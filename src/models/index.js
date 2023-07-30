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

const { Staff, Appointments, Patient } = initSchema(schema);

export {
  Staff,
  Appointments,
  Patient,
  StaffRoleEnum,
  AppointmentStatusEnum
};