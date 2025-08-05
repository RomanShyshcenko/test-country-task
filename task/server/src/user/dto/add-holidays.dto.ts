import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray, ArrayMinSize, IsOptional } from 'class-validator';

export class AddHolidaysDto {
  @ApiProperty({
    example: 'US',
    description: 'Country code to fetch holidays from'
  })
  @IsString()
  countryCode: string;

  @ApiProperty({
    example: 2025,
    description: 'Year for which to fetch holidays'
  })
  @IsNumber()
  year: number;

  @ApiProperty({
    example: ["New Year's Day", "Independence Day"],
    description: 'List of specific holidays to add (optional)',
    required: false
  })
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  holidays?: string[];
}

export class PublicHolidayDto {
  @ApiProperty({ example: '2025-01-01' })
  date: string;

  @ApiProperty({ example: "New Year's Day" })
  name: string;

  @ApiProperty({ example: 'US' })
  countryCode: string;

  @ApiProperty({ example: true })
  global: boolean;

  @ApiProperty({ example: 'National holiday' })
  type: string;

  @ApiProperty({ example: 'Celebration of the new year' })
  localName: string;

  @ApiProperty({ example: false })
  fixed: boolean;
}
