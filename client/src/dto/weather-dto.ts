export interface WeatherDto {
    id: number;
    city: string;
    temperature: number;
    main: string;
    description: string;
    icon: string;
    date: Date;
}