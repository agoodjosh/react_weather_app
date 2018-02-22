import axios from 'axios';
import types from './types';


const owmAPI_KEY = 'e91b56c3268b16226a9a564c07f12b68';
const dsAPI_KEY = '802d496a31e673d1b88d971d70a0b546';
// const ROOT_URL = `https://api.darksky.net/forecast/${802d496a31e673d1b88d971d70a0b546}/37.8267,-122.4233,2018-02-21T00:00:00?exclude=minutely,hourly,flags,isd-stations`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${owmAPI_KEY}`;
const DarkSky_URL = `https://api.darksky.net/forecast/${dsAPI_KEY}/`

export function fetchWeather(city) {
    debugger;
    const url = `${ROOT_URL}&q=${city},us`;

    return dispatch => {
        const request = axios
            .get(url)
            .then(resp => {
                dispatch({
                    type: types.FETCH_WEATHER,
                    payload: resp.data
                });
                const lat = resp.data.city.coord.lat;
                const lon = resp.data.city.coord.lon;
                const ds_call = `${DarkSky_URL}${lat},${lon},2018-02-17T00:00:00?exclude=minutely,hourly,flags,isd-stations`;
                const ds_call2 = `${DarkSky_URL}${lat},${lon},2018-02-16T00:00:00?exclude=minutely,hourly,flags,isd-stations`;
                const day1 = axios.get(ds_call);
                const day2 = axios.get(ds_call2);
                axios.all([day1, day2]).then(resp => {
                    console.log('AXIOS.ALL RESP:', resp)
                    dispatch({
                        type: types.FETCH_PAST
                    })
                }

                );
            });
    }
}