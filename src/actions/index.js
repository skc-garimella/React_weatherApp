
import axios from 'axios';


const OPEN_WEATHER_API_KEY = '39b7617ebb3076cf8633b2eeccfb8c1d';
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${OPEN_WEATHER_URL}&q=${city},us`;
  const request = axios.get(url); //returns a Promise.

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
