import { useEffect, useState } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {

    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        fetch(`https://covid19.mathdro.id/api/countries`)
            .then(res => res.json())
            .then(({ countries }) => setCountriesList(countries))
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={e => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countriesList ? countriesList.map((country, index) => <option key={index}>{country.name}</option>) : null}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
