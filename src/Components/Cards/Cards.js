import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    return (
        <div>
            {confirmed && recovered && deaths && lastUpdate ?
                (<Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={3} component={Card} className={styles.infected}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" component="p">Number of active cases from COVID-19.</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" component="p">Number of recoveries from COVID-19.</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Casualties</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" component="p">Number of deaths caused by COVID-19.</Typography>
                        </CardContent>
                    </Grid>
                </Grid>) : null}
        </div>
    )
}

export default Cards
