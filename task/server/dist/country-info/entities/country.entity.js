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
exports.Country = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Country = class Country {
    id;
    name;
    capital;
    region;
    languages;
    currencies;
    population;
    area;
    timezones;
    flagUrl;
    additionalInfo;
};
exports.Country = Country;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique identifier of the country' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'United States', description: 'The name of the country' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Washington, D.C.', description: 'The capital city of the country' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Country.prototype, "capital", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'North America', description: 'The region where the country is located' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Country.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['English'],
        description: 'List of languages spoken in the country',
        type: [String]
    }),
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Country.prototype, "languages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['USD'],
        description: 'List of currencies used in the country',
        type: [String]
    }),
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Country.prototype, "currencies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 331002651, description: 'Total population of the country' }),
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Country.prototype, "population", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9833517, description: 'Total area of the country in square kilometers' }),
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Country.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['UTC-05:00'],
        description: 'List of timezones in the country',
        type: [String]
    }),
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Country.prototype, "timezones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/flag.png', description: 'URL to the country flag image' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Country.prototype, "flagUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Additional information about the country',
        example: { continent: 'North America', calling_code: '+1' }
    }),
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], Country.prototype, "additionalInfo", void 0);
exports.Country = Country = __decorate([
    (0, typeorm_1.Entity)('countries')
], Country);
//# sourceMappingURL=country.entity.js.map