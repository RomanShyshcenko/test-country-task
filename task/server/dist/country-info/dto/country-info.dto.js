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
exports.DetailedCountryInfoDto = exports.CountryPopulationYearDto = exports.BorderCountryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BorderCountryDto {
    countryCode;
    commonName;
}
exports.BorderCountryDto = BorderCountryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'US', description: 'Country code' }),
    __metadata("design:type", String)
], BorderCountryDto.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'United States', description: 'Common name of the country' }),
    __metadata("design:type", String)
], BorderCountryDto.prototype, "commonName", void 0);
class CountryPopulationYearDto {
    year;
    value;
}
exports.CountryPopulationYearDto = CountryPopulationYearDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2021, description: 'Year of population count' }),
    __metadata("design:type", Number)
], CountryPopulationYearDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 331002651, description: 'Population count for that year' }),
    __metadata("design:type", Number)
], CountryPopulationYearDto.prototype, "value", void 0);
class DetailedCountryInfoDto {
    borders;
    populationCounts;
    flagUrl;
}
exports.DetailedCountryInfoDto = DetailedCountryInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [BorderCountryDto],
        description: 'List of countries that share a border',
    }),
    __metadata("design:type", Array)
], DetailedCountryInfoDto.prototype, "borders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [CountryPopulationYearDto],
        description: 'Historical population data by year',
    }),
    __metadata("design:type", Array)
], DetailedCountryInfoDto.prototype, "populationCounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/flag.svg',
        description: 'URL to the country flag image',
    }),
    __metadata("design:type", String)
], DetailedCountryInfoDto.prototype, "flagUrl", void 0);
//# sourceMappingURL=country-info.dto.js.map