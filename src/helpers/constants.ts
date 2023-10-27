export const usersApiURL = 'https://jsonplaceholder.typicode.com/users';
export const weatherApiURL = (lat: number, lon: number, units: string) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.CLIMATE_API_KEY}`;
