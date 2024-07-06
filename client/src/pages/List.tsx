import {FC} from 'react';
import {Alert, Box, Container, Typography} from '@mui/material';
import {useWeatherList} from '../hooks';
import {Loader} from '../components/Loader';
import WeatherCard from '../components/weather-card/WeatherCard';

const List: FC = () => {
    const {weatherList, error, loading} = useWeatherList();

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return (
            <Alert severity="error" sx={{mt: 2}}>
                {error}
            </Alert>
        );
    }

    if (!weatherList.length) {
        return (
            <Typography variant="subtitle1" textAlign="center">
                There are no weather requests yet...
            </Typography>
        )
    }

    return (
        <Container maxWidth="md">
            <Typography variant="h4" textAlign="center">Last 100 weather requests</Typography>
            {weatherList.length > 0 && (
                <Box sx={{display: 'flex', flexDirection: 'column', mt: 1}}>
                    {weatherList.map((weather, index) => (
                        <WeatherCard key={index} weather={weather}/>
                    ))}
                </Box>
            )}
        </Container>
    );
};

export default List;
