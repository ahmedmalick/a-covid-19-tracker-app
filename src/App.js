import { useState, useEffect } from 'react'
import Cards from './Components/Cards/Cards'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import Chart from './Components/Chart/Chart'
import covidImg from './Assests/covid.png'
import styles from './App.module.css'

const App = () => {

    const [fetchedData, setFetchedData] = useState([]);
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (country) {
            fetch(`https://covid19.mathdro.id/api/countries/${country}`)
                .then(res => res.json())
                .then(data => setFetchedData(data))
        } else {
            fetch(`https://covid19.mathdro.id/api`)
                .then(res => res.json())
                .then(data => setFetchedData(data))
        }
    }, [country]);

    const handleCountryChange = (country) => {
        setCountry(country)
    }

    return (
        <div className={styles.container}>
            <img className={styles.img} src={covidImg} alt='Covid-19' />
            <Cards data={fetchedData} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart country={country} data={fetchedData} />
        </div>
    )
}

export default App