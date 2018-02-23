import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }
    renderWeather(arr, lon, lat) {
        console.log(`renderWeather:, ${arr}, ${lon}, ${lat}`);


        // console.log('renderWeather props:', this.props.weather);
        // const name = cityData.city.name;
        // const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9 / 5 - 459.67);
        // const pressures = cityData
        //     .list
        //     .map(weather => weather.main.pressure);
        // const humidities = cityData
        //     .list
        //     .map(weather => weather.main.humidity);
        //  Pull This FROM DATA!!!!!                        prob change this though
        // const { temperatureHigh, temperatureLow, time } = resp.data.daily.data[0];

        // const { lon, lat } = cityData.city.coord;
        // <td><Chart data={temps} color="orange" units="F" /></td>
        // <td><Chart data={pressures} color="green" units="hPa" /></td>
        // return (
        //     <tr key={name}>
        //         <td><GoogleMap lon={lon} lat={lat} /></td>
        //     </tr>
        // );
    }

    render() {
        console.log('PROPS', this.props);
        const { past_weather, lon, lat } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                {<tbody>
                    {
                        lat !== null ? this.renderWeather(past_weather, lon, lat) : ""
                    }
                </tbody>}
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        lon: state.weather.lon,
        lat: state.weather.lat,
        past_weather: state.weather.past_weather
    };
}

export default connect(mapStateToProps)(WeatherList);