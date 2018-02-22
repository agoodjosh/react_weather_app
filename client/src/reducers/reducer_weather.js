import types from '../actions/types';

const DEFAULT_STATE = []

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.FETCH_WEATHER:
            console.log('FETCH_WEATHER Reducer:', [action.payload, ...state])
            return [action.payload, ...state] // returns [city, city, city ] NOT [city, [city, city], city ]
        case types.FETCH_PAST:
            console.log('FETCH PASSED / MULTIPLE ACTIONS WORKED!');
    }
    return state
}