import React, { Component } from "react";
import axios from "axios";
import { apiKey } from "./config";
import Spinner from "./Components/Spinner";
import Interface from "./Components/Interface";
import { toCelsius } from "./utils";
import { formatTime } from "./utils";
import { getCurrentCoordinates } from "./getLocation";

class App extends Component {
  state = { weather: {} };

  

  async componentDidMount() {

    const currentCoordinates = await getCurrentCoordinates();
    let latitude = currentCoordinates.coords.latitude;
    let longitude = currentCoordinates.coords.longitude;
 
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      this.setState({ weather: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    
    const { weather } = this.state;
    return !this.state.weather ? (
      <Spinner />
    ) : (
      <>
        <Interface
          name={weather.name}
          time={formatTime(weather.dt)}
          // feels_like={weather.main}
          // tempMax={weather.main.temp_max}
          // tempMin={weather.main.temp_min}
          // pressure={weather.main.pressure}
          // humidity={weather.main.humidity}
          // speed={weather.wind.speed}
          // sunrise={weather.sys.sunrise}
          // sunset={weather.sys.sunrise}
        />
      </>
    );
  }
}

export default App;
