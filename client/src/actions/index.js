import axios from 'axios';
import types from './types';


const owmAPI_KEY = 'e91b56c3268b16226a9a564c07f12b68';
// const ROOT_URL = `https://api.darksky.net/forecast/${802d496a31e673d1b88d971d70a0b546}/37.8267,-122.4233,2018-02-21T00:00:00?exclude=minutely,hourly,flags,isd-stations`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${owmAPI_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    return dispatch => {
        const request = axios
            .get(url)
            .then(resp => {
                const { lat, lon } = resp.data.city.coord;
                dispatch({
                    type: types.FETCH_COOR,
                    lat: lat,
                    lon: lon
                });
                console.log('fetchWEATHER action', resp);
                const time = resp.data.list[0].dt_txt;

                let pastWeek = [];

                for (let i = 1; i < 8; i++) {
                    let tmrwDate = time.split(" ");
                    let delDash = tmrwDate[0].split('-');
                    delDash[2] = parseInt(delDash[2]) - i;
                    pastWeek.push(delDash.join('-'));
                }
                const ds_call = '/api/get-past-weather';
                const today = axios.post(ds_call, {
                    lon: lon,
                    lat: lat,
                    time: pastWeek[0]
                });
                const minus1day = axios.post(ds_call, {
                    lon: lon,
                    lat: lat,
                    time: pastWeek[1]
                });
                const minus2days = axios.post(ds_call, {
                    lon: lon,
                    lat: lat,
                    time: pastWeek[2]
                });
                const minus3days = axios.post(ds_call, {
                    lon: lon,
                    lat: lat,
                    time: pastWeek[3]
                });
                const minus4days = axios.post(ds_call, {
                    lon: lon,
                    lat: lat,
                    time: pastWeek[4]
                });
                const minus5days = axios.post(ds_call, {
                    lon: lon,
                    lat: lat,
                    time: pastWeek[5]
                });
                const minus6days = axios.post(ds_call, {
                    lon: lon,
                    lat: lat,
                    time: pastWeek[6]
                });
                axios.all([today, minus1day, minus2days, minus3days, minus4days, minus5days, minus6days]).then(resp => {
                    console.log('AXIOS.ALL RESP:', resp)
                    dispatch({
                        type: types.FETCH_PAST,
                        payload: resp
                    })
                }

                ).catch(data => console.log("ERROR from DARK SKY API:", data));
            });
    }
}