import React, { Component } from 'react';
import { formatTime } from '../utils';

class Interface extends Component {


    render() {
      const {name, time, feels_like, description, tempMin, tempMax, pressure, speed, humidity, sunrise, sunset} = this.props;

        return(
      <>  <div>
        <h1>{name}</h1>
        <p>Time calculated {time}</p>
        <div><span>Feels Like {feels_like}</span></div>
        <div><span>{description}</span></div>
        <div><span>High/Low {tempMax} {tempMin}</span></div>
        <div><span>Presure {pressure}</span></div>
        <div><span>Humidtity {humidity}</span></div>
        <div><span>Wind Speed {speed}</span></div>
        <div><span>Sunrise {sunrise}</span></div>
        <div><span>Sunset{sunset}</span></div>
        </div></>);
    }
}
 
export default Interface;