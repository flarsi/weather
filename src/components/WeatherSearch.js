import React, {useEffect, useState} from "react";
import {Autocomplete} from "@material-ui/lab";
import {Grid, IconButton, TextField} from "@material-ui/core";
import {fetchWeather} from "../store/weather/actions";
import {connect, useSelector} from "react-redux";
import Icon from "@mdi/react";
import {mdiMagnify} from '@mdi/js';


const WeatherSearch = ({fetchWeather}) => {
    const {cityList} = useSelector(state => state.city);
    const {name} = useSelector(state => state.weather.item.full);
    const [city, setCity] = useState({city: ''})

    useEffect(() => {
        if(!!name)
        setCity({city: name})
    }, [name])

    const handleChange = (event, value, reason) => {
        setCity(value)
        if (reason === "select-option")
            fetchWeather(value.city)
    }

    const HandleSearch = () => {
        fetchWeather(city.city)
    }


    return <Grid container alignItems="center">
        <Grid item xs={11}>
            <Autocomplete
                size={"medium"}
                fullWidth
                options={cityList}
                value={city}
                onChange={handleChange}
                filterSelectedOptions
                filterOptions={(options, state) => options.filter(({city}) => city.toLowerCase().includes(state.inputValue.toLowerCase(), 0))}
                getOptionLabel={(option) => option.city}
                renderInput={(params) => <TextField label={"type city name"} {...params} ></TextField>}
            />
        </Grid>
        <Grid item xs={1}>
            <IconButton onClick={HandleSearch}>
                <Icon path={mdiMagnify}
                      size={1}
                      color="black"
                />
            </IconButton>
        </Grid>
    </Grid>
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: city => dispatch(fetchWeather(city)),
})

export default connect(null, mapDispatchToProps)(WeatherSearch);
