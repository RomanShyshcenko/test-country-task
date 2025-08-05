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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const add_holidays_dto_1 = require("./dto/add-holidays.dto");
const calendar_event_entity_1 = require("./entities/calendar-event.entity");
const user_entity_1 = require("./entities/user.entity");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findOne(id) {
        return this.userService.findOne(id);
    }
    getUserCalendarEvents(userId) {
        return this.userService.getUserCalendarEvents(userId);
    }
    addHolidaysToCalendar(userId, addHolidaysDto) {
        return this.userService.addHolidaysToCalendar(userId, addHolidaysDto);
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'User has been successfully created',
        type: user_entity_1.User,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: 'User with this email already exists'
    }),
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the user with their calendar events',
        type: user_entity_1.User,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get user's calendar events" }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of user's calendar events",
        type: [calendar_event_entity_1.CalendarEvent],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, common_1.Get)(':userId/calendar/events'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserCalendarEvents", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Add holidays to user's calendar" }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The holidays have been successfully added to the calendar',
        type: [calendar_event_entity_1.CalendarEvent],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, common_1.Post)(':userId/calendar/holidays'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_holidays_dto_1.AddHolidaysDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addHolidaysToCalendar", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map