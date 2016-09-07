
import React, { Component } from 'react';
import { connect } from 'react-redux';


import Chart  from '../components/chart';
import GoogleMap from '../components/google-maps';


class WeatherList extends Component {


  renderWeather(cityData){
    const city = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp-273.15);
    const pres = cityData.list.map((weather) => weather.main.pressure);
    const humids = cityData.list.map((weather) => weather.main.humidity);
    const lat = cityData.city.coord.lat;
    const lon = cityData.city.coord.lon;

    //console.log(temps);
    return(
      <tr key={city}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart values={temps} color="red" type="avg" units="C" />
        </td>
        <td>
          <Chart values={pres} color="blue" type="avg" units="hPa" />
        </td>
        <td>
          <Chart values={humids} color="green" type="avg" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return (
    { weather: state.weather }
  );
}

export default connect(mapStateToProps)(WeatherList)
