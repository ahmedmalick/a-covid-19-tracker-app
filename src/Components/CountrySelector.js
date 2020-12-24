import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { countriesData } from '../Api/api';

const useStyles = makeStyles((theme) => ({

}));

function CountrySelector() {
  const [countriesData, setCountriesData] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setCountriesData(await countriesData());
    }
    fetchAPI();
  }, [setCountriesData]);

  const classes = useStyles();

  return (
    <div>
      <FormControl>
        <NativeSelect defaultValue="" onChange={(e)=> countryHandler(e.target.value)}>
          <option>Global</option>
          {countriesData.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
  );
}


export default CountrySelector;