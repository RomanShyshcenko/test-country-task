import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { User } from './entities/user.entity';
import { CalendarEvent } from './entities/calendar-event.entity';
import { AddHolidaysDto, PublicHolidayDto } from './dto/add-holidays.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly dateNagerApiUrl = 'https://date.nager.at/api/v3';

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(CalendarEvent)
    private calendarEventRepository: Repository<CalendarEvent>,
    private readonly httpService: HttpService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['calendarEvents'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async addHolidaysToCalendar(
    userId: number,
    addHolidaysDto: AddHolidaysDto,
  ): Promise<CalendarEvent[]> {
    const user = await this.findOne(userId);

    // Fetch holidays from Date Nager API
    const response = await firstValueFrom(
      this.httpService.get<PublicHolidayDto[]>(
        `${this.dateNagerApiUrl}/PublicHolidays/${addHolidaysDto.year}/${addHolidaysDto.countryCode}`,
      ),
    );
    console.log('Fetched holidays:', response.data);
    let holidays = response.data;

    // Filter holidays if specific ones are requested
    if (addHolidaysDto.holidays && addHolidaysDto.holidays.length > 0) {
      holidays = holidays.filter(holiday =>
        addHolidaysDto.holidays!.some(name => name === holiday.name)
      );
    }
    console.log('Filtered holidays:', holidays);

    // Create calendar events for each holiday
    const calendarEvents = holidays.map(holiday => {
      const event = this.calendarEventRepository.create({
        name: holiday.name,
        date: new Date(holiday.date),
        countryCode: holiday.countryCode,
        description: `${holiday.localName} - ${holiday.type}`,
        global: holiday.global,
        eventType: holiday.type,
        year: addHolidaysDto.year,
        user: user,
      });
      return event;
    });

    // Save all events to the database
    return await this.calendarEventRepository.save(calendarEvents);
  }

  async getUserCalendarEvents(userId: number): Promise<CalendarEvent[]> {
    const user = await this.findOne(userId);
    return user.calendarEvents;
  }
}
