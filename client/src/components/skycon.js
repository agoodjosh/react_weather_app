import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default props => {
    const skyConFormat = props.icon.toUpperCase().split("-").join("_");

    return (
        <ReactAnimatedWeather
            icon={skyConFormat}
            color={'black'}
            size={64}
            animate={true}
        />
    )
}