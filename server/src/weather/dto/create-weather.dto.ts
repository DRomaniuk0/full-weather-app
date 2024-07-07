import {IsNotEmpty, IsString, IsNumber, IsDate} from 'class-validator';

export class CreateWeatherDto {
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
