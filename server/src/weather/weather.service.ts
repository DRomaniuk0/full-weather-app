import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './entities/weather.entity';
import { catchError, lastValueFrom, map } from 'rxjs';
import { CreateWeatherDto } from './dto/create-weather.dto';

const API = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = `a2cbf6e830ad7617b647a16b12b96710`;

@Injectable()
export class WeatherService {
    constructor(
        private httpService: HttpService,
        @InjectRepository(Weather)
        private weatherRepository: Repository<Weather>,
    ) {}

    private convertKelvinToCelsius(kelvin: number): number {
        return Math.round(kelvin - 273.15);
    }

    async getWeather(city: string): Promise<Weather> {
        try {
            const weatherData = await lastValueFrom(
                this.httpService.get(`${API}q=${city}&appid=${API_KEY}`).pipe(
                    map(res => res.data),
                    catchError(error => {
                        throw new NotFoundException('CITY_NOT_FOUND');
                    }),
                )
            );

            if (!weatherData) {
                throw new NotFoundException('INCOMPLETE_DATA_RECEIVED_FROM_WEATHER_API');
            }

            const weatherBody: CreateWeatherDto = {
                city: weatherData.name,
                temperature: this.convertKelvinToCelsius(weatherData.main.temp),
                main: weatherData.weather[0].main,
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon,
                date: new Date(),
            };

            const weather = this.weatherRepository.create(weatherBody);

            return this.weatherRepository.save(weather);
        } catch (error) {
            throw new Error('UNABLE_TO_FETCH_WEATHER_DATA');
        }
    }

    async getWeatherList(): Promise<Weather[]> {
        return this.weatherRepository.find({
            order: {
                date: 'DESC',
            },
            take: 100,
        });
    }
}
