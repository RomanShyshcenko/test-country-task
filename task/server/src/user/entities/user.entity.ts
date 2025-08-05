import { ApiProperty } from '@nestjs/swagger';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import type { CalendarEvent } from '.';

@Entity('users')
export class User {
  @ApiProperty({ example: 1, description: 'Unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @Column()
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Email address of the user',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    type: 'array',
    description: 'User calendar events',
    items: {
      $ref: '#/components/schemas/CalendarEvent',
    },
  })
  @OneToMany('CalendarEvent', 'user')
  calendarEvents: CalendarEvent[];
}
