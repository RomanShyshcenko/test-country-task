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
exports.CountryInfoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let CountryInfoService = class CountryInfoService {
    httpService;
    dateNagerApiUrl = 'https://date.nager.at/api/v3';
    countriesNowApiUrl = 'https://countriesnow.space/api/v0.1';
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getAvailableCountries() {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.dateNagerApiUrl}/AvailableCountries`));
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch available countries', common_1.HttpStatus.BAD_GATEWAY);
        }
    }
    async getDetailedCountryInfo(countryCode) {
        try {
            const borderInfoResponse = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.dateNagerApiUrl}/CountryInfo/${countryCode}`));
            const populationResponse = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${this.countriesNowApiUrl}/countries/population`, { country: borderInfoResponse.data.commonName }));
            const flagResponse = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${this.countriesNowApiUrl}/countries/flag/images`, { country: borderInfoResponse.data.commonName }));
            return {
                borders: borderInfoResponse.data.borders,
                populationCounts: populationResponse.data.data.populationCounts,
                flagUrl: flagResponse.data.data.flag,
            };
        }
        catch (error) {
            throw new common_1.HttpException(`Failed to fetch country information: ${error.message}`, common_1.HttpStatus.BAD_GATEWAY);
        }
    }
};
exports.CountryInfoService = CountryInfoService;
exports.CountryInfoService = CountryInfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CountryInfoService);
//# sourceMappingURL=country-info.service.js.map