import React, { Component } from 'react';

class WeatherUnit extends Component {
    render() { 
        console.log(this.props)
        const  {value, unit, value2, className} = this.props;
        return (
            <div className={className}><span>{unit}</span><span>{value}{value2}</span></div>

        );
    }
}
 
export default WeatherUnit;