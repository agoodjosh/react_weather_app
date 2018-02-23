import types from '../actions/types';

const DEFAULT_STATE = {
    lat: null,
    lon: null,
    past_weather: []
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.FETCH_COOR:
            // console.log('FETCH_COOR Reducer STATE:', ...state);
            // console.log('FETCH_COOR Reducer LON STATE:', action.lon);
            // console.log('FETCH_COOR Reducer LAT STATE:', action.lat);
            return { ...state, lat: action.lat, lon: action.lon }// returns [city, city, city ] NOT [city, [city, city], city ]
        case types.FETCH_PAST:
            // console.log('FETCH PASSED / MULTIPLE ACTIONS WORKED! :', ...state);
            // console.log('FETCH PASSED / MULTIPLE ACTIONS WORKED! :', action.payload);
            return { ...state, past_weather: action.payload }
    }
    return state
}