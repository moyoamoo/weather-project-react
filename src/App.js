import React, { Component } from "react";
import axios from "axios";
import { apiKey, getForecastData, getWeatherData} from "./config";
import Spinner from "./Components/Spinner";
import Interface from "./Components/Interface";
import { toCelsius, formatTime} from "./utils";
import { getCurrentCoordinates } from "./getLocation";


class App extends Component {
  state = { };


  async componentDidMount() {
    const currentCoordinates = await getCurrentCoordinates();
    let latitude = currentCoordinates.coords.latitude;
    let longitude = currentCoordinates.coords.longitude;
 
    try {
      const { data } = await axios.get(
        getWeatherData(latitude,longitude, apiKey)

      );
 
      this.setState({ weather: data }); 
     
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.weather)
    const { weather } = this.state;
    
    return !weather ? (
      <Spinner />
    ) : (
      <>
        <Interface
         weather={weather}
        />
      </>
    );
  }
}

export default App;
