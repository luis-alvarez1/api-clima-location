type Coordinates = {
    lat: number;
    lon: number;
};

export type Weather = {
    main: string;
    description: string;
    temp: number;
    unit: 'Celsius' | 'Fahrenheit' | 'Kelvin';
    unitMeasure: 'C' | 'F' | 'K';
    feelsLike: number;
};

export type ClimateResponse = {
    coord: Coordinates;
    weather: Weather;
};
