import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { NagerCountryDto } from './dto/nager-country.dto';
import {
  DetailedCountryInfoDto,
  BorderCountryDto,
  CountryPopulationYearDto,
} from './dto/country-info.dto';

interface NagerApiCountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderCountryDto[];
}

interface CountriesNowPopulationResponse {
  error: boolean;
  msg: string;
  data: {
    country: string;
    code: string;
    populationCounts: CountryPopulationYearDto[];
  };
}

interface CountriesNowFlagResponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    flag: string;
  };
}

@Injectable()
export class CountryInfoService {
  private readonly dateNagerApiUrl = 'https://date.nager.at/api/v3';
  private readonly countriesNowApiUrl = 'https://countriesnow.space/api/v0.1';

  constructor(private readonly httpService: HttpService) {}

  async getAvailableCountries(): Promise<NagerCountryDto[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<NagerCountryDto[]>(
          `${this.dateNagerApiUrl}/AvailableCountries`,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch available countries',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async getDetailedCountryInfo(countryCode: string): Promise<DetailedCountryInfoDto> {
    try {
      // Fetch border countries from Date Nager API
      const borderInfoResponse = await firstValueFrom(
        this.httpService.get<NagerApiCountryInfo>(
          `${this.dateNagerApiUrl}/CountryInfo/${countryCode}`,
        ),
      );

      // Fetch population data from CountriesNow API
      const populationResponse = await firstValueFrom(
        this.httpService.post<CountriesNowPopulationResponse>(
          `${this.countriesNowApiUrl}/countries/population`,
          { country: borderInfoResponse.data.commonName },
        ),
      );

      // Fetch flag URL from CountriesNow API
      const flagResponse = await firstValueFrom(
        this.httpService.post<CountriesNowFlagResponse>(
          `${this.countriesNowApiUrl}/countries/flag/images`,
          { country: borderInfoResponse.data.commonName },
        ),
      );

      return {
        borders: borderInfoResponse.data.borders,
        populationCounts: populationResponse.data.data.populationCounts,
        flagUrl: flagResponse.data.data.flag,
      };
    } catch (error) {
      throw new HttpException(
        `Failed to fetch country information: ${error.message}`,
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
