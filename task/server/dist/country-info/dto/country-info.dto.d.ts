export declare class BorderCountryDto {
    countryCode: string;
    commonName: string;
}
export declare class CountryPopulationYearDto {
    year: number;
    value: number;
}
export declare class DetailedCountryInfoDto {
    borders: BorderCountryDto[];
    populationCounts: CountryPopulationYearDto[];
    flagUrl: string;
}
