"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const user_entity_1 = require("./entities/user.entity");
const calendar_event_entity_1 = require("./entities/calendar-event.entity");
let UserService = class UserService {
    userRepository;
    calendarEventRepository;
    httpService;
    dateNagerApiUrl = 'https://date.nager.at/api/v3';
    constructor(userRepository, calendarEventRepository, httpService) {
        this.userRepository = userRepository;
        this.calendarEventRepository = calendarEventRepository;
        this.httpService = httpService;
    }
    async create(createUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['calendarEvents'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async addHolidaysToCalendar(userId, addHolidaysDto) {
        const user = await this.findOne(userId);
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.dateNagerApiUrl}/PublicHolidays/${addHolidaysDto.year}/${addHolidaysDto.countryCode}`));
        console.log('Fetched holidays:', response.data);
        let holidays = response.data;
        if (addHolidaysDto.holidays && addHolidaysDto.holidays.length > 0) {
            holidays = holidays.filter(holiday => addHolidaysDto.holidays.some(name => name === holiday.name));
        }
        console.log('Filtered holidays:', holidays);
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
        return await this.calendarEventRepository.save(calendarEvents);
    }
    async getUserCalendarEvents(userId) {
        const user = await this.findOne(userId);
        return user.calendarEvents;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(calendar_event_entity_1.CalendarEvent)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        axios_1.HttpService])
], UserService);
//# sourceMappingURL=user.service.js.map