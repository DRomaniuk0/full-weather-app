import {FC} from 'react';
import {Container, Alert} from '@mui/material';
import MainForm from './MainForm';
import {useWeather} from '../../hooks';
import WeatherCard from "../../components/weather-card/WeatherCard";

const Main: FC = () => {
    const {weather, error, fetchWeather} = useWeather();

    const handleFetchWeather = (data: { city: string }) => {
        fetchWeather(data.city);
    };

    return (
        <Container maxWidth="sm">
            <MainForm onSubmit={handleFetchWeather}/>
            {error && (
                <Alert severity="error" sx={{mt: 2}}>
                    {error}
                </Alert>
            )}
            {weather && <WeatherCard weather={weather}/>}
        </Container>
    );
};

export default Main;
