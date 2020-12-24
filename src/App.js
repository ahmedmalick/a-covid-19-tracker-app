import React, { Component } from 'react';
import CenteredGrid from './Components/Grids';
import CountrySelector from './Components/CountrySelector';
import Charts from './Components/Charts';
import image from './Images/image.png';
import { globalData } from './Api/api';
import './App.css';

class App extends Component() {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetcheddata = await globalData()
    this.setState({ data: fetcheddata })
  }

  countryHandler = async (country) => {
    const globalData = await globalData(country);
    this.setState({ data: globalData, country: country })
  }
  render() {
    const { data, country } = this.state;
    return (
      <div>
        <img src={image} alt="COVID-19" />
        <CenteredGrid data={data} />
        <CountrySelector countryHandler={this.countryHandler} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
