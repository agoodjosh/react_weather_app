import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import 'moment-timezone';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import Skycon from '../components/skycon';

class WeatherList extends Component {
    constructor(props) {
        super(props);

    }
    renderWeather(arr) {
        console.log(`renderWeather:, ${arr}`);
        arr.map((item, index) => {
            const { icon, temperatureHigh, temperatureLow, time } = item.data.daily.data[0];
            const convertDate = Date(time);
            const dateArr = convertDate.split(" ");
            const formatDate = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
            return (
                <div key={index}>
                    <Skycon icon={icon} />
                    <p>{temperatureHigh} degrees F</p>
                    <p>{temperatureLow} degrees F</p>
                </div>
            )
        });

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

        const { past_weather, lon, lat } = this.props;

        const lastWeek = past_weather.map((item, index) => {
            console.log('MAP:', item);
            const { icon, temperatureHigh, temperatureLow, time } = item.data.daily.data[0];

            return (
                <div className="past-weather col s7 m4 l2" key={index}>
                    <Skycon icon={icon} />
                    <p>High: {temperatureHigh} ºF</p>
                    <p>Low: {temperatureLow} ºF</p>
                    <Moment unix format="MM/DD/YYYY">{time}</Moment>
                </div>
            )
        });
        return (
            <div className="gmap-container">
                {lat !== null ? <GoogleMap lon={lon} lat={lat} /> : ""}
                <div className=" past-weather-container row">
                    {past_weather !== null ? lastWeek : ""}
                </div>
            </div>
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