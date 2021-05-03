import React, { useState } from "react";
import './App.css';

import Header from './components/Header';
import Weather from './components/Weather';
import Slider from './components/Slider';
import Answer from './components/Answer';

function App() {

  let [cityName, setCityName] = useState("Loading...");
  let [weatherType, setWeatherType] = useState("Loading...");
  let [weatherTypeMain, setWeatherTypeMain] = useState("");
  let [temperature, setTemperature] = useState("Loading...");
  let [perceivedTemperature, setPerceivedTemperature] = useState("Loading...");
  let [Answer, SetAnswer] = useState("");



  window.addEventListener("load", ()=> {

      let long;
      let lat;

      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              long = position.coords.longitude;
              lat = position.coords.latitude;
              const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f8b7d1603752f2b6d598d1cb2893c5b2`
              
              
              fetch(api)
              .then (response => {
                  return response.json();
              })
              .then (data => {
                  console.log(data);
                  setCityName(data.name);
                  setWeatherType(data.weather[0].description)
                  setWeatherTypeMain(data.weather[0].main)
                  setTemperature(data.main.temp)
                  setPerceivedTemperature(data.main.feels_like)

                    if (temperature<5) {
                    SetAnswer("Stanna inne")
                    } else {
                        SetAnswer("Go for it")
                    }

              })
              .catch((error) => {
                console.error("Error uppdating document: ", error);
              });
              });

      }
  });

  return (
    <div className="container">
    <Header />
    <Weather 
      cityName={cityName} 
      setCityName={setCityName} 
      weatherType={weatherType} 
      setWeatherType={setWeatherType} 
      weatherTypeMain={weatherTypeMain}
      setWeatherTypeMain={setWeatherTypeMain}
      temperature={temperature} 
      setTemperature={setTemperature}
      perceivedTemperature={perceivedTemperature}
      setPerceivedTemperature={setPerceivedTemperature}
    />
    <Slider />
    <Answer 
      cityName={cityName} 
      setCityName={setCityName} 
      weatherType={weatherType} 
      setWeatherType={setWeatherType} 
      weatherTypeMain={weatherTypeMain}
      setWeatherTypeMain={setWeatherTypeMain}
      temperature={temperature} 
      setTemperature={setTemperature}
      perceivedTemperature={perceivedTemperature}
      setPerceivedTemperature={setPerceivedTemperature}
      Answer={Answer}
      SetAnswer={SetAnswer}
    />
    </div>
  );
}

export default App;
