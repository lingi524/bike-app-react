import React from "react";
let cityName = "city"

function Weather () {
    window.addEventListener("load", ()=> {

        let long;
        let lat;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f8b7d1603752f2b6d598d1cb2893c5b2`
                console.log(lat, long);
                
                
                fetch(api)
                .then (response => {
                    return response.json();
                })
                .then (data => {
                    console.log(data);
                    cityName = data.name;
                    console.log(cityName+"Inside function")
                });
                });

        }
    });
    console.log(cityName+"outside function")
   
    return (
        <div>
            <p></p>
            <p>Weather info</p>
            <p>Weather info</p>
        </div>    
        )
}

export default Weather