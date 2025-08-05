export declare class AddHolidaysDto {
    countryCode: string;
    year: number;
    holidays?: string[];
}
export declare class PublicHolidayDto {
    date: string;
    name: string;
    countryCode: string;
    global: boolean;
    type: string;
    localName: string;
    fixed: boolean;
}
