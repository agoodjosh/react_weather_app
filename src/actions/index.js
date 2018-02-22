import axios from 'axios';
import types from './types';


const API_KEY = 'e91b56c3268b16226a9a564c07f12b68';
// const ROOT_URL = `https://api.darksky.net/forecast/${802d496a31e673d1b88d971d70a0b546}/37.8267,-122.4233,2018-02-21T00:00:00?exclude=minutely,hourly,flags,isd-stations`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
    debugger;
    const url = `${ROOT_URL}&q=${city},us`;


    const request = axios
        .get(url)
        .then(resp => {
            console.log('get openweathermap.org', resp.data);
            return dispatch(resp.data);
        });
    return {
        type: types.FETCH_WEATHER,
        payload: request
    }
}