import { DataStore} from 'aws-amplify';
import { Appointments, AppointmentStatusEnum } from '../models';


export const getNumberOfAppointmentsThisWeek = async () => {
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay())); // End of the week (Saturday)
  try {
    const appointmentsThisWeek = await DataStore.query(
        Appointments,
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
    const missedAppointments = await DataStore.query(Appointments, (appointment) =>
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

// export const getNumberOfTasks = async () => {
//     try {
//       // Query the tasks (assuming 'tasks' is a status in the Appointments model representing tasks)
//       const tasks = await DataStore.query(Appointments, (appointment) =>
//         appointment.status.eq(AppointmentStatusEnum.TASK)
//       );
  
//       // Get the number of tasks
//       const numberOfTasks = tasks.length;
  
//       return numberOfTasks;
//     } catch (error) {
//       console.error('Error retrieving tasks:', error);
//       return 0; // Return 0 in case of an error or no tasks found.
//     }
//   };

  
  
  
  