import { DataStore} from 'aws-amplify';
import { Patient } from '../models';

export interface IPatient {
  id: string;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
  email: string | null | undefined;
  date_of_birth: string | null | undefined;
  phone_number: string | null | undefined;
  gender: string | null | undefined;
}


export const getNumberOfPatientsThisWeek = async () => {
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay())); // End of the week (Saturday)
  try {
    const patientsThisWeek = await DataStore.query(
        Patient,
        (patient) =>
            patient.createdAt.between(
                startOfWeek.toISOString(),
                endOfWeek.toISOString())
    );
    const numberOfPatientsThisWeek = patientsThisWeek.length;
    return numberOfPatientsThisWeek;
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    return 0;
  }
}
export const getPatients = async () => {
  try {
    // Fetch the patients from the 'Patient' model
    const patientsData = await DataStore.query(Patient);

    // Convert the query result to the 'IPatient' interface
    const patients: IPatient[] = patientsData.map(patient => ({
      id: patient.id || '',
      first_name: patient.first_name || '',
      last_name: patient.last_name || '',
      email: patient.email || '',
      date_of_birth: patient.date_of_birth || '',
      phone_number: patient.phone_number || '',
      gender: patient.gender || '',
    }));

    return patients;
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [] as IPatient[]; // Return an empty array with the correct type
  }
};















  
  
  
  