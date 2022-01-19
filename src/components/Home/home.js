import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import KeyDataCard from './keyDataCard'
import Loader from '../Loader/Loader'
import { BackToTop } from '../scrollToTop'
import CountrySelect, { useQuery } from '../selectCountry'
import TableCountries from './countriesTable'
import axios from 'axios'
import countries from './countries'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        margin: "0 auto",
        padding: "1rem",
        justifyContent: "center",
    },
    cntry: {
        width: "fit-content",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "1rem",
        boxSizing: "border-box"
    }
}))



export default function Home() {
    const query = useQuery()
    const [state, setState] = useState({ loading: true, global: [], all: [] });
    const [stateAll, setStateAll] = useState({ loading: true, all: [] });

    const getGlobalData = async () => {
        const response = await axios.get('https://disease.sh/v3/covid-19/all')
        setState(() => ({ ...state, loading: false, global: response.data }))
    };

    const searchByCountry = async (evnt) => {
        if (evnt === "World") return getGlobalData()
        const response = await axios.get('https://disease.sh/v3/covid-19/countries/' + evnt)
        setState({ ...state, loading: false, global: response.data })
    }

    const searchByCountryAll = async () => {
        const response = await axios.get(`https://disease.sh/v3/covid-19/countries?sort=cases`)
        setStateAll({ ...state, loading: false, all: response.data })
    }

    useEffect(() => {
        let country = query.get('country');
        let exist = countries.filter(cnt => { return country && cnt.label.toLowerCase() === country.toLowerCase() })[0];
        (exist) ?
            searchByCountry(country) :
            getGlobalData()
        searchByCountryAll()
    }, [query]);

    const classes = useStyles()
    return (
        <React.Fragment>
            <Box children="COVID summary" className={classes.cntry} component="h1" />
            <CountrySelect def={query.get('country') ?? 'World'} trig={searchByCountry} />
            <Box className={classes.root}>
                {state.loading ? (<Loader props={state.global}></Loader>) : (<React.Fragment>
                    <KeyDataCard prop="orange" props="cases" children={[state.global.cases, 'FcBiotech', state.global.updated]} />
                    <KeyDataCard prop="red" props="deaths" children={[state.global.deaths, 'FcCloseUpMode', state.global.updated]} />
                    <KeyDataCard prop="green" props="recovered" children={[state.global.recovered, 'FcBullish', state.global.updated]} />
                    <KeyDataCard prop="orange" props="active" children={[state.global.active, 'FcAssistant', state.global.updated]} />
                </React.Fragment>)}
            </Box>
            <Box children="COVID by country" className={classes.cntry} component="h1" />
            {stateAll.loading ? (<Loader props={stateAll.all}></Loader>) : <TableCountries className={classes.tbl} data={stateAll.all} />}
            <BackToTop />
        </React.Fragment >
    )
}


