import { ApiProperty } from '@nestjs/swagger';

export class BorderCountryDto {
  @ApiProperty({ example: 'US', description: 'Country code' })
  countryCode: string;

  @ApiProperty({
    example: 'United States',
    description: 'Common name of the country',
  })
  commonName: string;
}

export class CountryPopulationYearDto {
  @ApiProperty({ example: 2021, description: 'Year of population count' })
  year: number;

  @ApiProperty({
    example: 331002651,
    description: 'Population count for that year',
  })
  value: number;
}

export class DetailedCountryInfoDto {
  @ApiProperty({
    type: [BorderCountryDto],
    description: 'List of countries that share a border',
  })
  borders: BorderCountryDto[];

  @ApiProperty({
    type: [CountryPopulationYearDto],
    description: 'Historical population data by year',
  })
  populationCounts: CountryPopulationYearDto[];

  @ApiProperty({
    example: 'https://example.com/flag.svg',
    description: 'URL to the country flag image',
  })
  flagUrl: string;
}
