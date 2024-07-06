import axios from 'axios';
import { WeatherDto } from '../dto/weather-dto';
import {WEATHER_SERVICE_BASE_URL} from "./weather-service.constants";

export const fetchWeather = async (city: string): Promise<WeatherDto> => {
    const response = await axios.get(`${WEATHER_SERVICE_BASE_URL}?city=${city}`);
    return response.data;
};

export const fetchWeatherList = async (): Promise<WeatherDto[]> => {
    const response = await axios.get(`${WEATHER_SERVICE_BASE_URL}/list`);
    return response.data;
};
