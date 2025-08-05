import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CountryInfoService } from './country-info.service';
import { NagerCountryDto } from './dto/nager-country.dto';
import { DetailedCountryInfoDto } from './dto/country-info.dto';

@ApiTags('countries')
@Controller('countries')
export class CountryInfoController {
  constructor(private readonly countryInfoService: CountryInfoService) {}

  @ApiOperation({ summary: 'Get available countries from Date Nager API' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of available countries', 
    type: NagerCountryDto,
    isArray: true 
  })
  @Get('available')
  getAvailableCountries(): Promise<NagerCountryDto[]> {
    return this.countryInfoService.getAvailableCountries();
  }

  @ApiOperation({ summary: 'Get detailed country information' })
  @ApiParam({ name: 'countryCode', description: 'ISO country code (e.g., UA for Ukraine)' })
  @ApiResponse({ 
    status: 200, 
    description: 'Detailed country information including borders, population data, and flag URL',
    type: DetailedCountryInfoDto
  })
  @Get('info/:countryCode')
  getDetailedCountryInfo(@Param('countryCode') countryCode: string): Promise<DetailedCountryInfoDto> {
    return this.countryInfoService.getDetailedCountryInfo(countryCode);
  }
}
