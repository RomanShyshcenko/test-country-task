import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddHolidaysDto } from './dto/add-holidays.dto';
import { CalendarEvent } from './entities/calendar-event.entity';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User has been successfully created',
    type: User,
  })
  @ApiResponse({ 
    status: HttpStatus.CONFLICT, 
    description: 'User with this email already exists' 
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the user with their calendar events',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: "Get user's calendar events" })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: "List of user's calendar events",
    type: [CalendarEvent],
  })

  @ApiResponse({ status: 404, description: 'User not found' })
  @Get(':userId/calendar/events')
  getUserCalendarEvents(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<CalendarEvent[]> {
    return this.userService.getUserCalendarEvents(userId);
  }

  @ApiOperation({ summary: "Add holidays to user's calendar" })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({
    status: 201,
    description: 'The holidays have been successfully added to the calendar',
    type: [CalendarEvent],
  })

  @ApiResponse({ status: 404, description: 'User not found' })
  @Post(':userId/calendar/holidays')
  @HttpCode(HttpStatus.CREATED)
  addHolidaysToCalendar(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() addHolidaysDto: AddHolidaysDto,
  ): Promise<CalendarEvent[]> {
    return this.userService.addHolidaysToCalendar(userId, addHolidaysDto);
  }
}
