// cardData.ts
import { IconType } from 'react-icons';
import { FiPackage, FiBook, FiLayout } from 'react-icons/fi';

export interface CardData {
  title: string;
  icon: IconType;
  stat: number;
  colorClass: string;
  description: string;
  imageSrc: string;
}

export const cards: CardData[] = [
  {
    title: 'Appointments',
    icon: FiPackage,
    stat: 46,
    colorClass: 'text-primary',
    description: 'This week',
    imageSrc: 'assets/img/illustrations/browser-stats.svg',
  },
  {
    title: 'Missed',
    icon: FiBook,
    stat: 4,
    colorClass: 'text-danger',
    description: 'Missed',
    imageSrc: 'assets/img/illustrations/processing.svg',
  },
  {
    title: 'Tasks',
    icon: FiLayout,
    stat: 15,
    colorClass: 'text-green',
    description: 'New Items!',
    imageSrc: 'assets/img/illustrations/windows.svg',
  },
];
