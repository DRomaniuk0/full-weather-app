import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {WeatherService} from './weather.service';
import {WeatherController} from './weather.controller';
import {Weather} from './entities/weather.entity';
import {HttpModule} from '@nestjs/axios';

@Module({
    imports: [
        TypeOrmModule.forFeature([Weather]),
        HttpModule
    ],
    providers: [WeatherService],
    controllers: [WeatherController],
})

export class WeatherModule {
}
