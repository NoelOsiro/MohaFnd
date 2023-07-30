import { IconType } from 'react-icons';
import { FiBell, FiMail, FiActivity, FiGlobe,FiLayout, FiPackage, FiTool, FiBarChart,FiHome, FiBarChart2, FiUsers, FiUserCheck, FiCalendar, FiHeart, FiEyeOff, FiBookOpen, FiRefreshCcw, FiDatabase, FiCreditCard, FiSpeaker, FiTablet, FiEye, FiLock, FiUserX, FiClipboard } from 'react-icons/fi';


interface MenuItem {
  title: string;
  icon: IconType;
  subItems?: {
    title: string;
    icon: IconType;
    link: string;
  }[];
}

export const accountItems: MenuItem[] = [
  {
    title: 'Alerts',
    icon: FiBell,
  },
  {
    title: 'Messages',
    icon: FiMail,
  },
];

export const coreItems: MenuItem[] = [
  {
    title: 'Dashboards',
    icon: FiActivity,
    subItems: [
      {
        title: 'Home',
        icon: FiHome,
        link:'/',
      },
      {
        title: 'Report',
        icon: FiBarChart2,
        link:'/reports',
      },
    ],
  },
];

export const customItems: MenuItem[] = [
  {
    title: 'Staff',
    icon: FiUsers,
    subItems: [
      {
        title: 'My Team',
        icon: FiUserCheck,
        link:'/staff/team',
      },
      {
        title: 'Roster',
        icon: FiCalendar,
        link:'/staff/roster',
      },
    ],
  },
  {
    title: 'Customers',
    icon: FiUsers,
    subItems: [
      {
        title: 'Patients',
        icon: FiHeart,
        link:'/customers/patients'
      },
      {
        title: 'Records',
        icon: FiDatabase,
        link:'/customers/records'
      },
    ],
  },
  {
    title: 'Appointments',
    icon: FiGlobe,
    subItems: [
      {
        title: 'View',
        icon: FiEyeOff,
        link:'/appointments/view',
      },
      {
        title: 'Book',
        icon: FiBookOpen,
        link:'/appointments/book',
      },
      {
        title: 'Reschedule',
        icon: FiRefreshCcw,
        link:'/appointments/reschedule'
      },
    ],
  },
  {
    title: 'Payments',
    icon: FiCreditCard,
    subItems: [
      {
        title: 'Make Payment',
        icon: FiTablet,
        link:'/payments/make'
      },
      {
        title: 'Insurance',
        icon: FiSpeaker,
        link:'/payments/insurance'
      },
      {
        title: 'Overview',
        icon: FiEye,
        link:'/payments/overview'
      },
    ],
  },
];

export const uiToolkitItems: MenuItem[] = [
  {
    title: 'Account',
    icon: FiLayout,
    subItems: [
      {
        title: 'Profile',
        icon: FiUserX,
        link:'/account/profile'
      },
      {
        title: 'Billing',
        icon: FiBarChart,
        link:'/account/billing'
      },
      {
        title: 'Notifications',
        icon: FiBell,
        link:'/account/notifications'
      },
      {
        title: 'Security',
        icon: FiLock,
        link:'/account/security'
      },
    ],
  },
  {
    title: 'Messages',
    icon: FiPackage,
    subItems: [
      {
        title: 'Inbox',
        icon: FiMail,
        link:'/account/messages'
      },
      {
        title: 'Tasks',
        icon: FiClipboard,
        link:'/account/tasks'
      },
    ],
  },
  {
    title: 'Alerts',
    icon: FiTool,
    subItems: [
      {
        title: 'Alerts',
        icon: FiBell,
        link:'/account/alerts'
      },
    ],
  },
];

