import React from "react";
import {Box, Card, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import Icon from "@mdi/react";
import {mdiGauge, mdiNavigation, mdiTemperatureCelsius, mdiThermometer} from "@mdi/js";

const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: "rgba(255,255,255,0.3)"
        },
        img: {
            width: "100%"
        }
    })
);

export const WeatherCard = ({weather}) => {
    const classes = useStyles()

    return <Grid container direction="column" item lg={4} md={6} sm={6} xs={12}>
        {weather?.main &&
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {weather.dt_txt}
                </Typography>
                <Typography variant="h5" component="h2">
                    <Box component={Grid} container alignItems="center" justify="space-between">
                        <Grid item xs={8}>
                            {Math.round(weather.main.temp)}
                            <Icon path={mdiTemperatureCelsius} size={1}/><Icon path={mdiThermometer} size={1}/>
                        </Grid>
                        <Grid item xs={4}>
                            <img className={classes.img}
                                 src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                 alt={weather.weather[0].main}
                            />
                        </Grid>
                    </Box>
                </Typography>
                <Typography variant="body2" component="h2">
                    <Box pl={2} component={Grid} container alignItems="center">
                        <Box component={Grid} container item xs={12} alignItems="center">
                            <Icon path={mdiNavigation} size={1} rotate={weather.wind.deg}/>
                            {weather.wind.speed}m/s &nbsp; W
                        </Box>
                        <Box pl={2} component={Grid} container item xs={12} alignItems="center">
                            <Icon path={mdiGauge} size={1}/> {weather.main.pressure}hPa
                        </Box>
                        <Box pl={2} component={Grid} item xs={12}>
                            Humidity: &nbsp; {weather.main.humidity}%
                        </Box>
                    </Box>
                </Typography>
            </CardContent>
        </Card>
        }
    </Grid>
}