import { IconType } from 'react-icons';
import { FiPackage, FiBook, FiLayout } from 'react-icons/fi';
import { getNumberOfAppointmentsThisWeek, getNumberOfMissedAppointments, getNumberOfTasks } from '../../Services/DashService';

export interface CardData {
  title: string;
  icon: IconType;
  statPromise: Promise<number>; // Change this to number instead of Promise<number>
  colorClass: string;
  description: string;
  imageSrc: string;
}


export const cards: CardData[] = [
  {
    title: 'Appointments',
    icon: FiPackage,
    statPromise: getNumberOfAppointmentsThisWeek(), // Default value, you can set it to 0 or any other initial value you prefer
    colorClass: 'text-primary',
    description: 'This week',
    imageSrc: 'assets/img/illustrations/browser-stats.svg',
  },
  {
    title: 'Missed',
    icon: FiBook,
    statPromise: getNumberOfTasks(), // Default value, you can set it to 0 or any other initial value you prefer
    colorClass: 'text-danger',
    description: 'Missed',
    imageSrc: 'assets/img/illustrations/processing.svg',
  },
  {
    title: 'Tasks',
    icon: FiLayout,
    statPromise: getNumberOfAppointmentsThisWeek(), // Default value, you can set it to 0 or any other initial value you prefer
    colorClass: 'text-green',
    description: 'New Items!',
    imageSrc: 'assets/img/illustrations/windows.svg',
  },
];

// Function to update the stats for each card
async function updateCardStats() {
  try {
    const [appointments, missed, tasks] = await Promise.all([
      getNumberOfAppointmentsThisWeek(),
      getNumberOfMissedAppointments(),
      getNumberOfTasks(),
    ]);

    // Update the `stat` property for each card with the obtained values
    cards[0].statPromise = Promise.resolve(appointments);
    cards[1].statPromise = Promise.resolve(missed);
    cards[2].statPromise = Promise.resolve(tasks);
  } catch (error) {
    console.error('Error updating card stats:', error);
  }
}

// Call the updateCardStats function to update the card stats
updateCardStats();
