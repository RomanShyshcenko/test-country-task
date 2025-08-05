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
exports.PublicHolidayDto = exports.AddHolidaysDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddHolidaysDto {
    countryCode;
    year;
    holidays;
}
exports.AddHolidaysDto = AddHolidaysDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'US',
        description: 'Country code to fetch holidays from'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddHolidaysDto.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2025,
        description: 'Year for which to fetch holidays'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AddHolidaysDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ["New Year's Day", "Independence Day"],
        description: 'List of specific holidays to add (optional)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AddHolidaysDto.prototype, "holidays", void 0);
class PublicHolidayDto {
    date;
    name;
    countryCode;
    global;
    type;
    localName;
    fixed;
}
exports.PublicHolidayDto = PublicHolidayDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01' }),
    __metadata("design:type", String)
], PublicHolidayDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "New Year's Day" }),
    __metadata("design:type", String)
], PublicHolidayDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'US' }),
    __metadata("design:type", String)
], PublicHolidayDto.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PublicHolidayDto.prototype, "global", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'National holiday' }),
    __metadata("design:type", String)
], PublicHolidayDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Celebration of the new year' }),
    __metadata("design:type", String)
], PublicHolidayDto.prototype, "localName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], PublicHolidayDto.prototype, "fixed", void 0);
//# sourceMappingURL=add-holidays.dto.js.map