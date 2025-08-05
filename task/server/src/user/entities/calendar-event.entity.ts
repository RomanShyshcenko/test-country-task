import { ApiProperty } from '@nestjs/swagger';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import type { User } from '.';

@Entity('calendar_events')
export class CalendarEvent {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier of the calendar event',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "New Year's Day",
    description: 'Name of the holiday',
  })
  @Column()
  name: string;

  @ApiProperty({ example: '2025-01-01', description: 'Date of the holiday' })
  @Column({ type: 'date' })
  date: Date;

  @ApiProperty({ example: 'US', description: 'Country code for the holiday' })
  @Column()
  countryCode: string;

  @ApiProperty({
    example: 'National holiday',
    description: 'Description of the holiday',
  })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the user who owns this calendar event',
  })
  @Column()
  userId: number;

  @ManyToOne('User', (user: User) => user.calendarEvents)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ApiProperty({
    example: false,
    description: 'Whether the holiday is a global observance',
  })
  @Column({ default: false })
  global: boolean;

  @ApiProperty({
    example: 'America/New_York',
    description: 'Timezone for the holiday',
  })
  @Column({ default: 'UTC' })
  timezone: string;

  @ApiProperty({
    example: 'Full day',
    description: 'Type of the holiday event',
  })
  @Column({ default: 'Full day' })
  eventType: string;

  @ApiProperty({ example: '2025', description: 'Year of the holiday' })
  @Column()
  year: number;
}
