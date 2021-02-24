import React from "react";
import {LoadingProvider} from "./modules/loadingManager/loadingContext";
import Notifier from "./modules/notifier";
import {SnackbarProvider} from "notistack";
import {connect} from "react-redux";
import {fetchWeather} from "./store/weather/actions";

function App({fetchWeather}) {
    fetchWeather("München")
    return (
        <div className="App">
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

                </LoadingProvider>
            </SnackbarProvider>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: city => dispatch(fetchWeather(city)),
})

export default connect(null, mapDispatchToProps)(App);
