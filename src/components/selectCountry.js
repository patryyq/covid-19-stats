import React from 'react'
import { useHistory, useLocation } from "react-router-dom"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import countries from './Home/countries'
import Typography from '@material-ui/core/Typography'
import { FcGlobe } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
    ico: {
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: "80%",
        margin: "0 auto",
        maxWidth: "500px",
        justifyContent: "space-between",
        alignItems: "center",
    },
    country: {
        flex: 1,
        display: "flex",
        alignItems: "center"

    },
    form: {
        flex: 5,
    }
}))

export function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function CountrySelect(props) {
    const query = useQuery()
    const history = useHistory()
    const defaultProps = {
        options: countries,
        flex: 3,
        getOptionLabel: (option) => option.label,
    };
    const countryInList = props.def ? countries.filter(country => { return country.label.toLowerCase() === props.def.toLowerCase() })[0] : null
    const country = countryInList ? countryInList : { label: "World", code: "WD" }

    const setInput = (value) => {
        (props.compare) ?
            history.push((query.get('country') !== (null && '') ? '?country=' + query.get('country') + '&' : '?') +
                'country2=' + (value && value.label ? value.label : '')) :
            history.push('?country=' + (value && value.label ? value.label : '') +
                (query.get('country2') !== (null && '') ? '&country2=' + query.get('country2') : ''))
        if (value !== null) props.trig(value.label)
    }

    const classes = useStyles()
    return (
        <Box className={props.className}>
            <Box className={classes.ico}>
                <Typography className={classes.country} variant="h5" component="div">
                    {country.label === "World" && (
                        <FcGlobe size="33" />)}
                    {country.label !== "World" && (
                        <Box>
                            <img loading="lazy" alt="flag"
                                height="25"
                                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}

                            />
                        </Box>)}
                </Typography>
                <Autocomplete size="large" className={classes.form}
                    sx={{ color: "#333", fontSize: 35 }}
                    {...defaultProps}
                    blurOnSelect
                    value={country}

                    onChange={(e, val) => setInput(val)}
                    renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                    )}
                />
            </Box>
        </Box>
    );
}

