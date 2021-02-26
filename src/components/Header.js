import React from "react";
import {Box, Grid, makeStyles} from "@material-ui/core";
import WeatherSearch from "./WeatherSearch";
import MobileFavoriteMenu from "./MobileFavoriteMenu";

const useStyles = makeStyles(theme => ({
        header: {
            paddingTop: "0.5rem",
            [theme.breakpoints.down('sm')]: {
                backgroundColor: theme.palette.primary.main,
                position: "fixed",
                top: 0,
                zIndex: "1111"
            }
        },
        favoriteMenu: {
            [theme.breakpoints.up('md')]: {
                display: "none"
            }
        }
    })
);

const Header = () => {
    const classes = useStyles()

    return <>
        <Box component={Grid} pb={2} container direction="row" justify="center" className={classes.header}>
            <Grid item container lg={3} md={5} sm={8} xs={10}>
                <WeatherSearch/>
            </Grid>
            <MobileFavoriteMenu className={classes.favoriteMenu}/>
        </Box>
    </>
}

export default Header