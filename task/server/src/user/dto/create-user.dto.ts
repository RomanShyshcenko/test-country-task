import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user'
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Email address of the user'
  })
  @IsEmail()
  email: string;
}
