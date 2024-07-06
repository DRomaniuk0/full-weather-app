import {FC} from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import { format } from 'date-fns';
import { WeatherCardProps } from './WeatherCard.types';
import {ICON_URL} from "./WeatherCard.constants";

const WeatherCard: FC<WeatherCardProps> = ({ weather }) => {
    const formattedDate = format(new Date(weather.date), 'yyyy-MM-dd HH:mm:ss');

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 55, height: 55, margin: 1 }}
                image={`${ICON_URL}/${weather.icon}.png`}
                alt={weather.description}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography variant="h5">{weather.city}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Temperature: {weather.temperature}°C
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Main: {weather.main}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Description: {weather.description}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        Date: {formattedDate}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default WeatherCard;
