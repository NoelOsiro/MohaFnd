import { FcAddressBook, FcAlarmClock, FcBiohazard, FcCdLogo, FcDataRecovery, FcInfo } from "react-icons/fc";
import { FiAlertCircle, FiInfo, FiMail, FiStopCircle } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export interface DropdownItemProps {
  title: string;
  icon: IconType;
  link: string;
  content: string;
  details: string;
}
export const documentationItems: DropdownItemProps[] = [
  {
    title: 'Documentation',
    icon: FcAddressBook,
    link: 'https://docs.startbootstrap.com/sb-admin-pro',
    content: 'Usage instructions and reference',
    details: 'Documentation',
  },
  {
    title: 'Components',
    icon: FcCdLogo,
    link: 'https://docs.startbootstrap.com/sb-admin-pro/components',
    content: 'Code snippets and reference',
    details: 'Components',
  },
  {
    title: 'Changelog',
    icon: FcDataRecovery,
    link: 'https://docs.startbootstrap.com/sb-admin-pro/changelog',
    content: 'Updates and changes',
    details: 'Changelog',
  },
];

export const alertsItems: DropdownItemProps[] = [
  {
    title: 'Example Alert 1',
    icon: FiAlertCircle,
    link: '#!',
    content: "This is an alert message. It's nothing serious, but it requires your attention.",
    details: 'December 29, 2021',
  },
  {
    title: 'Example Alert 2',
    icon: FiInfo,
    link: '#!',
    content: 'A new monthly report is ready. Click here to view!',
    details: 'December 22, 2021',
  },
  {
    title: 'Example Alert 3',
    icon: FiStopCircle,
    link: '#!',
    content: 'Critical system failure, systems shutting down.',
    details: 'December 8, 2021',
  },
  {
    title: 'Example Alert 4',
    icon: FcBiohazard,
    link: '#!',
    content: 'New user request. Woody has requested access to the organization.',
    details: 'December 2, 2021',
  },
];

export const messagesItems: DropdownItemProps[] = [
  {
    title: 'Example Message 1',
    icon: FiMail,
    link: '#!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    details: 'Thomas Wilcox · 58m',
  },
  {
    title: 'Example Message 2',
    icon: FiMail,
    link: '#!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    details: 'Emily Fowler · 2d',
  },
  {
    title: 'Example Message 3',
    icon: FiMail,
    link: '#!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    details: 'Marshall Rosencrantz · 3d',
  },
  {
    title: 'Example Message 4',
    icon: FiMail,
    link: '#!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    details: 'Colby Newton · 3d',
  },
];