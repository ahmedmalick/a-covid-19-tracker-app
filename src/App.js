import React from 'react';
import CenteredGrid from './Components/Grids/Grids';
import CountrySelector from './Components/CountrySelector/CountrySelector';
import Chart from './Components/Charts/Charts';
import { fetchData } from './Api/api';
import styles from './App.module.css';
import image from './Images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <CenteredGrid data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;