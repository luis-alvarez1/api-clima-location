import axios from 'axios';
import { weatherApiURL } from '../constants';
import { Weather } from '../types/Climate';
import { WeatherInfoResponse } from '../types/Weather';

export const getWeatherInfoFromCoords = async (lat: number, lon: number, units = 'metric') => {
    const res = await axios.get(weatherApiURL(lat, lon, units));
    const weatherInfo: WeatherInfoResponse = res.data;

    const data: Weather = {
        main: weatherInfo.weather[0].main,
        description: weatherInfo.weather[0].description,
        temp: weatherInfo.main.temp,
        unit: 'Celsius',
        unitMeasure: 'C',
        feelsLike: weatherInfo.main.feels_like,
    };
    // console.log(data);
    return data;
};
