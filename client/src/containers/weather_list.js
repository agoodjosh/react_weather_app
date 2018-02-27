import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import 'moment-timezone';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Chart from '../components/chart';
import Skycon from '../components/skycon';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        // this.renderMap = this.renderMap.bind(this);
    }

    // renderMap(lon, lat) {
    //     return (
    //         <GoogleMap lon={lon} lat={lat} />
    //     )
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.lat !== nextProps.lat) {
    //         this.renderMap(nextProps.lon, nextProps.lat);
    //     }
    // }

    render() {

        const { past_weather, lon, lat, name } = this.props;

        const lastWeek = past_weather.map((item, index) => {
            console.log('MAP:', item);
            const { icon, temperatureHigh, temperatureLow, time } = item.data.daily.data[0];

            return (
                <div className="past-weather col s7 m4 l2" key={index}>
                    <Skycon icon={icon} />
                    <p>H: {temperatureHigh} ºF</p>
                    <p>L: {temperatureLow} ºF</p>
                    <Moment unix format="MM/DD/YYYY">{time}</Moment>
                </div>
            )
        });
        return (
            <div>
                <h3 className="main-title">{name !== "" ? `Last Week's Weather in ${name}:` : "Please enter a US city to get past week's weather!"}</h3>
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
        name: state.weather.name,
        past_weather: state.weather.past_weather
    };
}

export default connect(mapStateToProps)(WeatherList);