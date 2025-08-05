import type { User } from '.';
export declare class CalendarEvent {
    id: number;
    name: string;
    date: Date;
    countryCode: string;
    description: string;
    userId: number;
    user: User;
    global: boolean;
    timezone: string;
    eventType: string;
    year: number;
}
