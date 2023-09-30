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
        title: 'Reports',
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
    title: 'Tenants',
    icon: FiUsers,
    subItems: [
      {
        title: 'Tenants',
        icon: FiHeart,
        link:'/tenants'
      },
      {
        title: 'Records',
        icon: FiDatabase,
        link:'/tenants/records'
      },
      {
        title: 'Requests ',
        icon: FiClipboard,
        link:'/services/request'
      },
    ],
  },
  {
    title: 'Properties',
    icon: FiGlobe,
    subItems: [
      {
        title: 'View',
        icon: FiEyeOff,
        link:'/property/view',
      },
      {
        title: 'Lease/Rent',
        icon: FiBookOpen,
        link:'/property/book',
      },
      {
        title: 'Service',
        icon: FiRefreshCcw,
        link:'/property/reschedule'
      },
    ],
  },
  {
    title: 'Payments',
    icon: FiCreditCard,
    subItems: [
      {
        title: 'Overview',
        icon: FiTablet,
        link:'/payments/overview'
      },
      {
        title: 'Analytics',
        icon: FiSpeaker,
        link:'/payments/analytics'
      },
      {
        title: 'Accounts',
        icon: FiEye,
        link:'/payments/overview#accounts'
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
        title: 'Managers',
        icon: FiBell,
        link:'/account/notifications'
      },
      {
        title: 'Owners',
        icon: FiLock,
        link:'/account/security'
      },
    ],
  },
  {
    title: 'Contractors',
    icon: FiPackage,
    subItems: [
      {
        title: 'Services',
        icon: FiMail,
        link:'/contractor/services'
      },
      {
        title: 'Tasks ',
        icon: FiClipboard,
        link:'/contractor/tasks'
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

