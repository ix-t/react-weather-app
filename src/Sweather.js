import React from "react";
import "./styles.css";

export default function Sweather(props) {
  return (
    <div className="row">
      {props.SweatherData.map(function (data, index) {
        return (
          <div className="col day" key={index}>
            <div className="weather-forecast-date">{data.day}</div>
            <img src={data.icon} alt="secondary-weather-icon" />
            <div className="weather-forecast-temperature">
              <strong>
                <span>{data.maxTemp}°</span>
              </strong>
            </div>
            <div>
              <span>{data.minTemp}°</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
