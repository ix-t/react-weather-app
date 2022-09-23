import React from "react";
import Search from "./Search";
import Sweather from "./Sweather";
import "./styles.css";

export default function Weather() {
  let PweatherData = {
    city: "Belfast",
    date: "Sun 11:08",
    icon: "https://openweathermap.org/img/wn/02d@2x.png",
    temperature: 19,
    description: "Few Clouds",
    humidity: 63,
    wind: 6,
  };

  let SweatherData = [
    {
      day: "Sun",
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      maxTemp: 20,
      minTemp: 8,
    },
    {
      day: "Mon",
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      maxTemp: 18,
      minTemp: 8,
    },
    {
      day: "Tue",
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      maxTemp: 19,
      minTemp: 11,
    },
    {
      day: "Wed",
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      maxTemp: 17,
      minTemp: 9,
    },
    {
      day: "Thu",
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      maxTemp: 20,
      minTemp: 12,
    },
    {
      day: "Fri",
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      maxTemp: 18,
      minTemp: 10,
    },
  ];

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <div className="principal-weather">
            <h1 id="city">{PweatherData.city}</h1>
            <h2>
              Last updated: <span id="date">{PweatherData.date}</span>
            </h2>
            <div className="row align-items-center">
              <div className="col-6">
                <img
                  src={PweatherData.icon}
                  alt="primary-weather-icon"
                  id="icon"
                  className="icon"
                />
              </div>
              <div className="col-6">
                <h3>
                  <span id="temperature">{PweatherData.temperature}</span>
                  <span className="units">&nbsp;°C</span>
                </h3>
                <h4 id="description">{PweatherData.description}</h4>
              </div>
            </div>
            <h5>
              Humidity: <span id="humidity">{PweatherData.humidity}</span>%
            </h5>
            <h6>
              Wind: <span id="wind">{PweatherData.wind}</span> km/h
            </h6>
          </div>
          <div className="secondary-weather" id="forecast">
            <Sweather SweatherData={SweatherData} />
          </div>
        </div>
        <footer>
          <div>
            This project was coded by&nbsp;
            <a
              href="https://www.linkedin.com/in/ixchel-t/"
              target="_blank"
              rel="noreferrer"
            >
              Ixchel
            </a>
            ,
          </div>
          <p>
            is&nbsp;
            <a
              href="https://github.com/ix-t/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://dazzling-pavlova-88e10d.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
