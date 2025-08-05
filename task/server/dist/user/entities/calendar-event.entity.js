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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEvent = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CalendarEvent = class CalendarEvent {
    id;
    name;
    date;
    countryCode;
    description;
    userId;
    user;
    global;
    timezone;
    eventType;
    year;
};
exports.CalendarEvent = CalendarEvent;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique identifier of the calendar event' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "New Year's Day", description: 'Name of the holiday' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CalendarEvent.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01', description: 'Date of the holiday' }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'US', description: 'Country code for the holiday' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CalendarEvent.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'National holiday', description: 'Description of the holiday' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID of the user who owns this calendar event' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)('User', (user) => user.calendarEvents),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", Function)
], CalendarEvent.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Whether the holiday is a global observance' }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CalendarEvent.prototype, "global", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'America/New_York', description: 'Timezone for the holiday' }),
    (0, typeorm_1.Column)({ default: 'UTC' }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Full day', description: 'Type of the holiday event' }),
    (0, typeorm_1.Column)({ default: 'Full day' }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025', description: 'Year of the holiday' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "year", void 0);
exports.CalendarEvent = CalendarEvent = __decorate([
    (0, typeorm_1.Entity)('calendar_events')
], CalendarEvent);
//# sourceMappingURL=calendar-event.entity.js.map