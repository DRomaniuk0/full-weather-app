import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import {WeatherDto} from "./dto/weather-dto";

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get()
    getWeather(@Query('city') city: string): Promise<WeatherDto> {
        return this.weatherService.getWeather(city);
    }

    @Get('list')
    getWeatherList(): Promise<WeatherDto[]> {
        return this.weatherService.getWeatherList();
    }
}
