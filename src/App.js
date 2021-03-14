import React, {useState} from "react";
import {LoadingProvider} from "./modules/loadingManager/loadingContext";
import Notifier from "./modules/notifier";
import {SnackbarProvider} from "notistack";
import {Box, Grid, makeStyles} from "@material-ui/core";
import Header from "./components/Header";
import {WeatherCard} from "./components/WeatherCard";
import {FullWeather} from "./components/FullWeather";
import {useSelector} from "react-redux";
import Favorite from "./components/Favorite";
import {useLocalStorage} from "./services/localStorage";

const useStyles = makeStyles(theme => ({
        content: {
            paddingTop: "0.5rem",
            [theme.breakpoints.down('sm')]: {
                paddingTop: "3rem"
            }
        },
        app: {
            height: "100%",
            color: theme.palette.text.primary
        },
        favorite: {
            [theme.breakpoints.down('sm')]: {
                display: "none"
            }
        },
    })
);

function App() {
    const localStorage = useLocalStorage()
    const favoriteInStorage = localStorage.getItem('favorite')
    const classes = useStyles()

    const {period} = useSelector(state => state.weather.item)
    const [favorite, setFavorite] = useState(favoriteInStorage)

    return (
        <div className={classes.app}>
            <SnackbarProvider
                dense
                maxSnack={3}
                preventDuplicate
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                    <LoadingProvider>
                        <Notifier/>
                        <Header/>
                        <Box component={Grid} container justify="center" direction="row" className={classes.content}>
                            <Grid container item xs={10}>
                                <Grid item lg={9} md={9} sm={12} xs={12}>
                                    <Box p={2} pl={0} pt={4} component={Grid} container item xs={12}
                                         justify="center">
                                        <FullWeather favorite={favorite} setFavorite={setFavorite}/>
                                    </Box>
                                    <Box p={2} component={Grid} container spacing={2} item xs={12}>
                                        {period?.list && period.list.map((elem, index) =>
                                            <WeatherCard weather={elem} key={index}/>
                                        )}
                                    </Box>
                                </Grid>
                                <Grid item lg={3} md={3} sm={12} xs={12} className={classes.favorite}>
                                    <Favorite favorite={favorite}/>
                                </Grid>
                            </Grid>
                        </Box>
                    </LoadingProvider>
            </SnackbarProvider>
        </div>
    );
}

export default App;
