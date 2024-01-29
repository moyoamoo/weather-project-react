import React, { Component } from "react";
import {
  formatTime,
  toCelsius,
  formatVisibility,
  formatWindSpeed,
} from "../utils";
import { imgUrl } from "../config";
import WeatherUnit from "./WeatherUnit";
import { type } from "@testing-library/user-event/dist/type";

//write a script that would go through an object convert to camel case
//charAt()
class Interface extends Component {
  render() {
    const { name, dt } = this.props.weather;

    const {
      feels_like: feelLike,
      temp_min: tempMin,
      temp_max: tempMax,
      temp,
      pressure,
      humidity,
    } = this.props.weather.main;

    const { sunrise, sunset } = this.props.weather.sys;

    const { description, icon } = this.props.weather.weather[0];

    const { speed } = this.props.weather.wind;

    return (
      <>
        <div class="weather">
          <h1>{name}</h1>
          <p>Time Calculated: {formatTime(dt)}</p>
          <p>Current Temp {toCelsius(temp)}</p>
          <p className="description">{description}</p>

          <img src={imgUrl(icon)} />
        </div>
        {/* {Object.entries(this.props.weather).map((item) => {
           if (typeof item[1] !== "string"){
            return
           }
           return (
              <WeatherUnit
                className="weatherUnit"
                unit={item[0]}
                value={item[1]}
              />
            );
          })} */}
        <div className="weatherUnitContainer">
          <WeatherUnit
            className="weatherUnit"
            unit={"Feels Like"}
            value={toCelsius(feelLike)}
          />
          <WeatherUnit
            className="weatherUnit"
            unit={"High/Low"}
            value={toCelsius(tempMax)}
            value2={toCelsius(tempMin)}
          />
          <WeatherUnit
            className="weatherUnit"
            unit={"Pressure"}
            value={pressure}
          />
          <WeatherUnit
            className="weatherUnit"
            className2="unit"
            unit={"Humidity"}
            value={humidity}
          />
          <WeatherUnit
            className="weatherUnit"
            unit={"Wind Speed"}
            value={formatWindSpeed(speed)}
          />
          <WeatherUnit
            className="weatherUnit"
            unit={"Sunrise"}
            value={formatTime(sunrise)}
          />
          <WeatherUnit
            className="weatherUnit"
            unit={"Sunset"}
            value={formatTime(sunset)}
          />
        </div>
      </>
    );
  }
}

export default Interface;
