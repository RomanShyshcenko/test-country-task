import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CountryInfoController } from './country-info.controller';
import { CountryInfoService } from './country-info.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CountryInfoController],
  providers: [CountryInfoService],
  exports: [CountryInfoService],
})
export class CountryInfoModule {}
