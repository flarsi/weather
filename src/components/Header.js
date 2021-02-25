import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import WeatherSearch from "./WeatherSearch";

const useStyles = makeStyles(theme => ({
        header: {
            maxHeight: "48px",
            paddingTop: "0.5rem",
        }
    })
);

const Header = () => {
    const classes = useStyles()

    return <Grid container direction="row" justify="space-around" className={classes.header}>
        <Grid item lg={3} md={5} sm={8} xs={10}>
        <WeatherSearch/>
        </Grid>
    </Grid>
}

export default Header