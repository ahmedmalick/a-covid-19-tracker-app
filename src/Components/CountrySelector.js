import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { countriesData } from '../Api/api';

// const useStyles = makeStyles((theme) => ({

// }));

const CountrySelector = ({countryHandler}) => {
  const [fetchedData, setFetchedData] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedData(await countriesData());
    }
    fetchAPI();
  }, [setFetchedData]);

  // const classes = useStyles();

  return (
    <div>
      <FormControl>
        <NativeSelect defaultValue="" onChange={(e)=> countryHandler(e.target.value)}>
          <option>Global</option>
          {fetchedData.map((country, i) =><option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
  );
}


export default CountrySelector;