import React, { useState ,useEffect } from 'react';
import { dailyData } from '../Api/api';
import { Bar } from 'react-chartjs-2';

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [fetchedData, setFetchedData] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedData(await dailyData());
    }
    fetchAPI();
  }, );

  const BarChart = (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Casualties'],
        datasets: [{
          label: 'people',
          backgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)',
          ],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current stats in ${country}` },
      }}
    />
  );


    return (
      <div>
        {country} {BarChart}
      </div>
    );
  }

export default Charts;