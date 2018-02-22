import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }
    renderWeather(cityData) {
        debugger;
        console.log('renderWeather:', cityData);
        // console.log('renderWeather props:', this.props.weather);
        // const name = cityData.city.name;
        // const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9 / 5 - 459.67);
        // const pressures = cityData
        //     .list
        //     .map(weather => weather.main.pressure);
        // const humidities = cityData
        //     .list
        //     .map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        // <td><Chart data={temps} color="orange" units="F" /></td>
        // <td><Chart data={pressures} color="green" units="hPa" /></td>
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
            </tr>
        );
    }

    render() {
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
                {/*<tbody>
                    {this
                        .props
                        .weather
                        .map(this.renderWeather)}
                    </tbody>*/}
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);