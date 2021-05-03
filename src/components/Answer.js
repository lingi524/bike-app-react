import React from "react";

function Answer ({cityName, weatherType, weatherTypeMain, temperature, perceivedTemperature, Answer}) {
    
    return (
        <div className="Answer">
        {/* <p>{temperature<5?'STAY IN':'GO FOR IT'}</p> */}
        <p>{Answer}</p>

        </div>
    )
}

export default Answer