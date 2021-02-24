import React from "react";
import {LoadingProvider} from "./modules/loadingManager/loadingContext";
import Notifier from "./modules/notifier";
import {SnackbarProvider} from "notistack";
import {connect} from "react-redux";
import {fetchWeather} from "./store/weather/actions";
import {Box, Grid} from "@material-ui/core";
import WeatherSearch from "./components/WeatherSearch";

function App({fetchWeather}) {
    return (
        <div className="App" style={{height: "100vh"}}>
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
                    <Grid container style={{height: "100%"}} spacing={2}>
                        <Grid container item lg={12} md={8} sm={6} xs={12}>
                            <Box component={Grid} item lg={8} md={6} sm={12} xs={12}>
                                <WeatherSearch/>
                            </Box>
                            <Box component={Grid} item lg={4} md={6} sm={12} xs={12}>test</Box>
                        </Grid>
                        <Grid item lg={12} md={4} sm={6} xs={12}>test</Grid>
                    </Grid>
                </LoadingProvider>
            </SnackbarProvider>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: city => dispatch(fetchWeather(city)),
})

export default connect(null, mapDispatchToProps)(App);
