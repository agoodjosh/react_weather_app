import types from '../actions/types';

const DEFAULT_STATE = []

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.FETCH_WEATHER:
            console.log('FETCH_WEATHER Reducer:', [action.payload.data, ...state])
            return [action.payload.data, ...state] // returns [city, city, city ] NOT [city, [city, city], city ]
    }
    return state
}