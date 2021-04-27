import React from "react";

function Answer ({cityName, weatherType, temperature, perceivedTemperature}) {

    return (
        <div className="Answer">
        <p>{temperature<5?'STAY IN':'GO FOR IT'}</p>
        </div>
    )
}

export default Answer