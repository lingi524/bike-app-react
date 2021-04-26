import React, { useState } from "react";
import Answer from "./Answer";

function Weather () {
    let [cityName, setCityName] = useState("Loading...")
    let [weatherType, setWeatherType] = useState("Loading...")
    let [temperature, setTemperature] = useState("Loading...")
    let [perceivedTemperature, setPerceivedTemperature] = useState("Loading...")


    window.addEventListener("load", ()=> {

        let long;
        let lat;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f8b7d1603752f2b6d598d1cb2893c5b2`
                console.log(lat, long);
                
                
                fetch(api)
                .then (response => {
                    return response.json();
                })
                .then (data => {
                    console.log(data);
                    setCityName(data.name);
                    setWeatherType(data.weather[0].description)
                    setTemperature(data.main.temp)
                    setPerceivedTemperature(data.main.feels_like)
                });
                });

        }
    });
   
    return (
        <div className="weatherText">
            <p>Should you go for a ride in {cityName}?</p>
            <p>Right now there's {weatherType} and {temperature}°</p>
            <p>It feels like {perceivedTemperature}°</p>
            <Answer cityName={cityName} />
        </div> 
        )
}

export default Weather