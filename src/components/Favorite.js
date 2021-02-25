import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {fetchWeather} from "../store/weather/actions";
import {connect} from "react-redux";

const Favorite = ({fetchWeather, favorite}) => {

    const HandleSearch = (city) => () => {
        fetchWeather(city)
    }

    return <Grid container spacing={1} direction="column">
        <Typography variant="h4" component="h2" align="center">Favorite cities</Typography>
        {Object.keys(favorite).map((key, index) =>
            <Grid item key={index}>
                <Button variant="outlined" fullWidth onClick={HandleSearch(key)}>{key}</Button>
            </Grid>
        )}

    </Grid>
}


const mapDispatchToProps = dispatch => ({
    fetchWeather: city => dispatch(fetchWeather(city)),
})

export default connect(null, mapDispatchToProps)(Favorite);
