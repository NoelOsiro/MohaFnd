import { DataStore} from 'aws-amplify';
import { Appointment, AppointmentStatusEnum, Task } from '../models';

export interface IAppointment {
  id: string;
  appointment_date: string;
  start_time: string;
  end_time: string;
  status: AppointmentStatusEnum;
  assigned_to: string;
  patientID?: string;
}


export const getNumberOfAppointmentsThisWeek = async () => {
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay())); // End of the week (Saturday)
  try {
    const appointmentsThisWeek = await DataStore.query(
        Appointment,
        (appointment) =>
            appointment.appointment_date.between(
                startOfWeek.toISOString(),
                endOfWeek.toISOString())
    );
    const numberOfAppointmentsThisWeek = appointmentsThisWeek.length;
    return numberOfAppointmentsThisWeek;
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    return 0;
  }
}


export const getNumberOfMissedAppointments = async () => {
  try {
    // Query the missed appointments
    const missedAppointments = await DataStore.query(Appointment, (appointment) =>
      appointment.status.eq(AppointmentStatusEnum.MISSED)
    );

    // Get the number of missed appointments
    const numberOfMissedAppointments = missedAppointments.length;

    return numberOfMissedAppointments;
  } catch (error) {
    console.error('Error retrieving missed appointments:', error);
    return 0; // Return 0 in case of an error or no missed appointments found.
  }
}

export const getNumberOfTasks = async () => {
    try {
      // Query the tasks (assuming 'tasks' is a status in the Appointments model representing tasks)
      const tasks = await DataStore.query(Task);
      // Get the number of tasks
      const numberOfTasks = tasks.length;
  
      return numberOfTasks;
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      return 0; // Return 0 in case of an error or no tasks found.
    }
  };
export const getAppointmentsThisWeek = async () => {
  try {
    // Calculate the start and end date of the current week
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)
    const endOfWeek = new Date(currentDate);
    endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay())); // End of the week (Saturday)

    // Fetch the appointments for the current week
    const appointmentsThisWeek = await DataStore.query(Appointment, (appointment) =>
      appointment.appointment_date.between(startOfWeek.toISOString().substring(0, 10), endOfWeek.toISOString().substring(0, 10))
    );

    // // Fetch the associated patient names for each appointment
    // const appointmentsWithPatientNames = await Promise.all(
    //   appointmentsThisWeek.map(async (appointment) => {
    //     const patient = await DataStore.query(Patient, appointment.patientID);
    //     const patientName = `${patient?.first_name || ''} ${patient?.last_name || ''}`.trim();
    //     return { ...appointment, patientName };
    //   })
    // );
    return appointmentsThisWeek as Appointment[]; // Explicitly cast to Appointment[]
  } catch (error) {
    console.error('Error fetching appointments this week:', error);
    return [] as Appointment[]; // Return an empty array with the correct type
  }
};
export const getAppointments = async () => {
  try {
    // Query the tasks (assuming 'tasks' is a status in the Appointments model representing tasks)
    const appts = await DataStore.query(Appointment);

    return appts as Appointment[];
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    return [] as Appointment[]; // Return 0 in case of an error or no tasks found.
  }
};













  
  
  
  