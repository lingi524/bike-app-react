import React from "react";

function Weather ({cityName, weatherType, temperature, perceivedTemperature}) {
   
    return (
        <div className="weatherText">
            <p>Should you go for a ride in {cityName}?</p>
            <p>Right now there's {weatherType} and {temperature}°</p>
            <p>It feels like {perceivedTemperature}°</p>
        </div> 
        )
}

export default Weather