// cardData.ts
import { IconType } from 'react-icons';
import { FiPackage, FiBook, FiLayout } from 'react-icons/fi';

export interface CardData {
  title: string;
  icon: IconType;
  colorClass: string;
  description: string;
  imageSrc: string;
}

export const cards: CardData[] = [
  {
    title: 'Powerful Components',
    icon: FiPackage,
    colorClass: 'text-primary',
    description: 'To create informative visual elements on your pages',
    imageSrc: 'assets/img/illustrations/browser-stats.svg',
  },
  {
    title: 'Documentation',
    icon: FiBook,
    colorClass: 'text-primary',
    description: 'To keep you on track when working with our toolkit',
    imageSrc: 'assets/img/illustrations/processing.svg',
  },
  {
    title: 'Pages & Layouts',
    icon: FiLayout,
    colorClass: 'text-green',
    description: 'To help get you started when building your new UI',
    imageSrc: 'assets/img/illustrations/windows.svg',
  },
];
