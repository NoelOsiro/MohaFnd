export interface IAppointment {
    staff: string;
    startTime: string;
    patient: string;
    status: string;
    createdAt: string;
    id: string;
    duration: string;
    reason: string;
  }
  
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT + '/appointments';
  const CACHE_KEY = 'appointments';
  
  export const fetchAndStoreAppointments = async (
    limit: number = 100,
    page: number = 1,
    sortOrder: 'asc' | 'desc' = 'desc'
  ): Promise<void> => {
    try {
        // Check if data is cached and not expired
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data, timestamp }: { data: IAppointment[]; timestamp: number } = JSON.parse(cachedData);
        const currentTime = Date.now();
        const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
        if (currentTime - timestamp <= fiveMinutes) {
          return;
        }
      }
      const queryParams = new URLSearchParams({
        limit: String(limit),
        page: String(page),
        sortOrder,
      });
  
      const url = `${apiEndpoint}?${queryParams.toString()}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
      const data: IAppointment[] = await response.json();
      const dataWithTimestamp = { data, timestamp: Date.now() };
      localStorage.setItem(CACHE_KEY, JSON.stringify(dataWithTimestamp));
    } catch (error:any) {
      return error.message;
    }
  };
  