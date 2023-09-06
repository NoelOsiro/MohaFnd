import { IconType } from 'react-icons';
import { FiPackage, FiBook, FiLayout } from 'react-icons/fi';
import { getNumberOfAppointmentsThisWeek, getNumberOfMissedAppointments, getNumberOfTasks } from '../../Services/DashService';

export interface CardData {
  title: string;
  icon: IconType;
  colorClass: string;
  description: string;
  imageSrc: string;
}


export const cards: CardData[] = [
  {
    title: 'Appointments',
    icon: FiPackage,
    colorClass: 'text-primary',
    description: 'This week',
    imageSrc: 'assets/img/illustrations/browser-stats.svg',
  },
  {
    title: 'Missed',
    icon: FiBook,
    colorClass: 'text-danger',
    description: 'Missed',
    imageSrc: 'assets/img/illustrations/processing.svg',
  },
  {
    title: 'Tasks',
    icon: FiLayout,
    colorClass: 'text-green',
    description: 'New Items!',
    imageSrc: 'assets/img/illustrations/windows.svg',
  },
];

