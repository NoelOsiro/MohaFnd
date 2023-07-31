import { DataStore } from 'aws-amplify';
import { Staff } from '../models';

export interface IStaff {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    phone_number: string;
    role: string;
}

export const getStaff = async () => {
    try {
        const staffData = await DataStore.query(Staff);

        // Convert the query result to the 'IStaff' interface
        const staff: IStaff[] = staffData.map(staff => ({
            username: staff.username || '',
            first_name: staff.first_name || '',
            last_name: staff.last_name || '',
            email: staff.email || '',
            role: staff.role || '',
            phone_number: staff.phone_number || '',
        }));
        return staff;
    } catch (error) {
        console.error('Error fetching patients:', error);
        return [] as IStaff[]; // Return an empty array with the correct type
    }
}