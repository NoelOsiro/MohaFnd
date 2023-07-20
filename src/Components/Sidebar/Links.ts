import { FcBarChart, FcBearish, FcBusinessman, FcCalendar, FcHighBattery, FcLike, FcParallelTasks, FcTemplate } from 'react-icons/fc';
import { IconType } from 'react-icons/lib';
interface ILink {
    path: string;
    label: string;
    icon: IconType
}
export const HomenavigationLinks: ILink[] = [
    { path: '/', label: 'Dashboard', icon: FcTemplate, },
    { path: '/reports', label: 'Reports', icon: FcBarChart  },
    { path: '/analytics', label: 'Analytics', icon: FcBearish  },
    // Add more navigation items as needed
  ];
export const OfficenavigationLinks: ILink[] = [
    { path: '/staff', label: 'Staff', icon: FcBusinessman },
    { path: '/patients', label: 'Patients', icon: FcLike },
    { path: '/appointments', label: 'Appointments', icon: FcCalendar },
    { path: '/insurance', label: 'Insurance', icon: FcHighBattery },
    { path: '/tasks', label: 'Tasks', icon: FcParallelTasks },
    // Add more navigation items as needed
  ];