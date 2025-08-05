export declare class CreateCountryDto {
    name: string;
    capital: string;
    region: string;
    languages: string[];
    currencies: string[];
    population: number;
    area: number;
    timezones: string[];
    flagUrl: string;
    additionalInfo?: Record<string, any>;
}
