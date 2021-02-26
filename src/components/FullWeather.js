import React, {useContext, useEffect} from "react";
import {Box, Card, CardContent, CardHeader, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {mdiThermometer, mdiTemperatureCelsius, mdiNavigation, mdiGauge, mdiStarCheck, mdiStarPlus} from '@mdi/js';
import Icon from "@mdi/react";
import {LoadingContext} from "../modules/loadingManager/loadingContext";
import LoadingScreen from "./LoadingScreen";

const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: "rgba(255,255,255,0.7)",
            position: "relative",
        },
        header: {
            position: "absolute",
            width: "100%"
        }
    })
);


export const FullWeather = ({favorite, setFavorite}) => {
    const classes = useStyles()
    const {loading, setLoading} = useContext(LoadingContext)
    const {item: {full}, fetching} = useSelector(state => state.weather)
    var current = new Date();

    useEffect(() => {
        setLoading(fetching)
    }, [fetching])

    const handleFavorite = () => {
        const favoriteCities = {...favorite}
        if(favoriteCities?.[full.name]){
            delete favoriteCities[full.name]
            setFavorite(favoriteCities)
            localStorage.setItem('favorite', JSON.stringify(favoriteCities));
        }else {
            setFavorite({...favoriteCities, [full.name]: true})
            localStorage.setItem('favorite', JSON.stringify({...favoriteCities, [full.name]: true}));
        }
    }

    return <Grid container direction="column" item lg={4} md={6} sm={8} xs={12}>
        {full?.main && !loading ?
        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                action={
                    <IconButton aria-label="settings" onClick={handleFavorite}>
                        <Icon path={favorite?.[full.name] ? mdiStarCheck : mdiStarPlus} size={1}/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {current.getHours()}:{current.getMinutes()}
                </Typography>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {full.name}, {full.sys.country}
                </Typography>
                <Typography variant="h5" component="h2">
                    <Box component={Grid} container alignItems="center" justify="space-between">
                        <Grid item xs={8}>
                            {Math.round(full.main.temp)}
                            <Icon path={mdiTemperatureCelsius} size={1}/><Icon path={mdiThermometer} size={1}/>
                        </Grid>
                        <Grid item xs={4}>
                            <img className={classes.img}
                                 src={`http://openweathermap.org/img/wn/${full.weather[0].icon}@2x.png`}
                            alt={full.weather[0].main}
                            />
                        </Grid>
                    </Box>
                </Typography>
                <Typography className={classes.pos} variant="h6" component="h3">
                    <Box component={Grid} container alignItems="center">
                        Files Like {Math.round(full.main.feels_like)}
                        <Icon path={mdiTemperatureCelsius} size={0.85}/><Icon path={mdiThermometer} size={0.85}/>,&nbsp;
                        {full.weather[0].description}.
                    </Box>
                </Typography>
                <Typography variant="body2" component="h2">
                    <Box pl={2} component={Grid} container alignItems="center">
                        <Box component={Grid} container item xs={12} alignItems="center">
                            <Icon path={mdiNavigation} size={1} rotate={full.wind.deg}/>
                            {full.wind.speed}m/s &nbsp; W
                        </Box>
                        <Box pl={2} component={Grid} container item xs={12} alignItems="center">
                            <Icon path={mdiGauge} size={1}/> {full.main.pressure}hPa
                        </Box>
                        <Box pl={2} component={Grid} item xs={12}>
                            Humidity: &nbsp; {full.main.humidity}%
                        </Box>
                    </Box>
                </Typography>
            </CardContent>
        </Card>
            :
            full?.main && <LoadingScreen/>
        }
    </Grid>
}