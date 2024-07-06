import { useState } from 'react';
import { fetchWeather as fetchWeatherService } from '../services/weather-service';
import {WeatherDto} from "../dto/weather-dto";

export const useWeather = () => {
    const [weather, setWeather] = useState<WeatherDto | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (city: string) => {
        try {
            const data = await fetchWeatherService(city);
            setWeather(data);
            setError(null);
        } catch (err) {
            setError('Please check the city name and try again.');
            setWeather(null);
        }
    };

    return {
        weather,
        error,
        fetchWeather
    };
};
