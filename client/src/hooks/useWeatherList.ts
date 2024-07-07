import {useEffect, useState} from 'react';
import {fetchWeatherList as fetchList} from '../services/weather-service';
import {WeatherDto} from '../dto/weather-dto';

export const useWeatherList = () => {
    const [weatherList, setWeatherList] = useState<WeatherDto[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchWeatherList = async () => {
            setLoading(true);
            try {
                const data = await fetchList();

                if (data.length) {
                    setWeatherList(data);
                }
                setError(null);
            } catch (err) {
                setError('Failed to fetch weather data list');
                setWeatherList([]);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherList();
    }, []);

    return {weatherList, error, loading};
};
