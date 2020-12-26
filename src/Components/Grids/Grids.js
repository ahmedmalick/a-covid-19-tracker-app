import React from 'react';
import { Typography, Grid, CardContent, } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Grids.module.css';
import cx from 'classnames';

const CenteredGrid = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  if (!confirmed) {
    return 'Loading...'
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid className={cx(styles.grid, styles.infected)} item xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={1} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid className={cx(styles.grid, styles.recovered)} item xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={1} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid className={cx(styles.grid, styles.deaths)} item xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Casualties</Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={1} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default CenteredGrid;