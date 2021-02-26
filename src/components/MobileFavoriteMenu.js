import React from "react";
import {Divider, Grid, IconButton, Menu, MenuItem} from "@material-ui/core";
import {fetchWeather} from "../store/weather/actions";
import {connect} from "react-redux";
import Icon from "@mdi/react";
import {mdiStar} from '@mdi/js';

const MobileFavoriteMenu = ({fetchWeather, ...rest}) => {
    const favorite = JSON.parse(localStorage.getItem('favorite'))

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const HandleSearch = (city) => () => {
        fetchWeather(city)
        setAnchorEl(null);
    }

    return <Grid item {...rest}>
        <IconButton onClick={handleClick}>
            <Icon path={mdiStar} size={1}/>
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {favorite && Object.keys(favorite).map((city, index, array) =>
                <div key={index}>
                    <MenuItem onClick={HandleSearch(city)}>{city}</MenuItem>
                    {index < array.length - 1 && <Divider/>}
                </div>
            )}
        </Menu>
    </Grid>
}


const mapDispatchToProps = dispatch => ({
    fetchWeather: city => dispatch(fetchWeather(city)),
})

export default connect(null, mapDispatchToProps)(MobileFavoriteMenu);