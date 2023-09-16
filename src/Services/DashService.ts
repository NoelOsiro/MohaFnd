// appointmentsService.ts

export interface AppointmentSummary {
  MissedAppointments: number;
  PendingAppointments: number;
  DoneAppointments: number;
}

const API_URL = process.env.REACT_APP_API_ENDPOINT + '/appointments/dash';
const CACHE_KEY = 'apptsSummary';

// Function to fetch and store appointment data with caching
export const fetchAndStoreDashAppointments = async (): Promise<void> => {
  try {
    // Check if data is cached and not expired
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, timestamp }: { data: AppointmentSummary; timestamp: number } = JSON.parse(cachedData);
      const currentTime = Date.now();
      const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
      if (currentTime - timestamp <= fiveMinutes) {
        return;
      }
    }
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }
    const data: AppointmentSummary = await response.json();
    const dataWithTimestamp = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(dataWithTimestamp));
  } catch (error:any) {
    return error.message
  }
};
