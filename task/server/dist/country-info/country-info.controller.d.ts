import { CountryInfoService } from './country-info.service';
import { NagerCountryDto } from './dto/nager-country.dto';
import { DetailedCountryInfoDto } from './dto/country-info.dto';
export declare class CountryInfoController {
    private readonly countryInfoService;
    constructor(countryInfoService: CountryInfoService);
    getAvailableCountries(): Promise<NagerCountryDto[]>;
    getDetailedCountryInfo(countryCode: string): Promise<DetailedCountryInfoDto>;
}
