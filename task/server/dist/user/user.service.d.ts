import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { User } from './entities/user.entity';
import { CalendarEvent } from './entities/calendar-event.entity';
import { AddHolidaysDto } from './dto/add-holidays.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userRepository;
    private calendarEventRepository;
    private readonly httpService;
    private readonly dateNagerApiUrl;
    constructor(userRepository: Repository<User>, calendarEventRepository: Repository<CalendarEvent>, httpService: HttpService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    addHolidaysToCalendar(userId: number, addHolidaysDto: AddHolidaysDto): Promise<CalendarEvent[]>;
    getUserCalendarEvents(userId: number): Promise<CalendarEvent[]>;
}
