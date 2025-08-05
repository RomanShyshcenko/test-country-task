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
exports.CountryInfoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const country_info_service_1 = require("./country-info.service");
const nager_country_dto_1 = require("./dto/nager-country.dto");
const country_info_dto_1 = require("./dto/country-info.dto");
let CountryInfoController = class CountryInfoController {
    countryInfoService;
    constructor(countryInfoService) {
        this.countryInfoService = countryInfoService;
    }
    getAvailableCountries() {
        return this.countryInfoService.getAvailableCountries();
    }
    getDetailedCountryInfo(countryCode) {
        return this.countryInfoService.getDetailedCountryInfo(countryCode);
    }
};
exports.CountryInfoController = CountryInfoController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get available countries from Date Nager API' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of available countries',
        type: nager_country_dto_1.NagerCountryDto,
        isArray: true
    }),
    (0, common_1.Get)('available'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryInfoController.prototype, "getAvailableCountries", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get detailed country information' }),
    (0, swagger_1.ApiParam)({ name: 'countryCode', description: 'ISO country code (e.g., UA for Ukraine)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Detailed country information including borders, population data, and flag URL',
        type: country_info_dto_1.DetailedCountryInfoDto
    }),
    (0, common_1.Get)('info/:countryCode'),
    __param(0, (0, common_1.Param)('countryCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryInfoController.prototype, "getDetailedCountryInfo", null);
exports.CountryInfoController = CountryInfoController = __decorate([
    (0, swagger_1.ApiTags)('countries'),
    (0, common_1.Controller)('countries'),
    __metadata("design:paramtypes", [country_info_service_1.CountryInfoService])
], CountryInfoController);
//# sourceMappingURL=country-info.controller.js.map