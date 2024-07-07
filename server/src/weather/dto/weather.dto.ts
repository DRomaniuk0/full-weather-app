import {IsNotEmpty, IsString, IsNumber, IsDate} from 'class-validator';

export class WeatherDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsNumber()
    temperature: number;

    @IsNotEmpty()
    @IsString()
    main: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    icon: string;

    @IsNotEmpty()
    @IsDate()
    date: Date;
}
