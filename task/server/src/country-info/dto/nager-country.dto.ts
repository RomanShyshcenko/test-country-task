import { ApiProperty } from '@nestjs/swagger';

export class NagerCountryDto {
  @ApiProperty({
    example: 'US',
    description: 'The country code (ISO 3166-1 alpha-2)',
  })
  countryCode: string;

  @ApiProperty({
    example: 'United States',
    description: 'The full name of the country',
  })
  name: string;
}
