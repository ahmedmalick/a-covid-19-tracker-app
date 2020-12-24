import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));

const CenteredGrid = ({ data: { confirmed, recovered, deaths }}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography>Confirmed</Typography>
          <Typography>
            <CountUp star={0} end={confirmed.value} duration={1.5} separator=',' />
          </Typography>
          <Typography>{new Date().toDateString()}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Recovered</Typography>
          <Typography>
          <CountUp star={0} end={recovered.value} duration={1.5} separator=',' />
          </Typography>
          <Typography>{new Date().toDateString()}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Casualties</Typography>
          <Typography>
          <CountUp star={0} end={deaths.value} duration={1.5} separator=',' />
          </Typography>
          <Typography>{new Date().toDateString()}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default CenteredGrid;
