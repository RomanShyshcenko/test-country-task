import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddHolidaysDto } from './dto/add-holidays.dto';
import { CalendarEvent } from './entities/calendar-event.entity';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    getUserCalendarEvents(userId: number): Promise<CalendarEvent[]>;
    addHolidaysToCalendar(userId: number, addHolidaysDto: AddHolidaysDto): Promise<CalendarEvent[]>;
}
