import { HttpService } from '@nestjs/axios';
import { NagerCountryDto } from './dto/nager-country.dto';
import { DetailedCountryInfoDto } from './dto/country-info.dto';
export declare class CountryInfoService {
    private readonly httpService;
    private readonly dateNagerApiUrl;
    private readonly countriesNowApiUrl;
    constructor(httpService: HttpService);
    getAvailableCountries(): Promise<NagerCountryDto[]>;
    getDetailedCountryInfo(countryCode: string): Promise<DetailedCountryInfoDto>;
}
