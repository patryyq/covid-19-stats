import React, { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import Fab from '@mui/material/Fab';
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { LineChartMany } from '../Charts/LineChartMany'
import CountrySelect from '../selectCountry'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useQuery } from '../selectCountry'

const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        margin: "0 auto",
        justifyContent: "center",
        overflow: "hidden"
    },
    slider: {
        maxWidth: "500px",
        margin: "0 auto",
        width: "70%"
    },
    fab: {
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: "20"
    },
    filters: {
        background: "#e0e0e0",
        padding: "2rem",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column"
    },
    cntry: {
        background: "#e0e0e0",
        margin: 0,
        padding: "2rem 0 0.0 0"
    }
}))

const parseDataCompare = (data) => {
    if (data.hasOwnProperty('cases')) data = [{ country: 'World', timeline: data }]
    if (data.hasOwnProperty('country')) data = [{ country: data.country, timeline: data.timeline }]
    let parsed = []
    for (let i = 0; i < data.length; ++i) {
        if (data[i] !== null) {
            let cases = Object.entries(data[i].timeline.cases)
            let deaths = Object.entries(data[i].timeline.deaths)
            let country = { country: data[i].country, data: [] }

            for (let c = 0; c < cases.length; ++c) {
                country.data.push({ date: cases[c][0], cases: cases[c][1], deaths: deaths[c][1] })
            }
            parsed.push(country)
        }
    }
    return parsed
}

export const useHistoricalData = () => {
    const query = useQuery()
    const [histData, setHistData] = useState(false);
    const [maxSlider, setMaxSlider] = useState(720)
    const [histDataGlobal, setGlobal] = useState()
    const [loaded, setLoaded] = useState(false)
    const [slider, setSlider] = useState(700);
    const [country, setCountry] = useState({ first: (query.get('country') && query.get('country') !== 'World' ? query.get('country') : 'all'), second: (query.get('country2') && query.get('country2') !== 'World' ? query.get('country2') : '') });
    const [compare, setCompare] = useState(query.get('country2') === null ? false : true)

    const loadData = () => {
        let first = country.first === 'World' ? 'all' : country.first
        let second = !country.second ? '' : ',' + country.second
        if ((first + second) === 'all,all') second = ''
        fetch(`https://disease.sh/v3/covid-19/historical/${first}${second}?lastdays=${slider}`)
            .then((response) => response.json())
            .then((json) => {
                if (second === ',all') {
                    setHistData([parseDataCompare(json)[0], histDataGlobal])
                } else if (first === 'all' && second === '') {
                    setHistData(parseDataCompare(json))
                } else if ((first === 'all' && second !== '')) {
                    setHistData([histDataGlobal, parseDataCompare(json)[0]])
                } else {
                    setHistData(parseDataCompare(json))
                }
            });
    };

    const loadMaxData = () => {
        fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`)
            .then((response) => response.json())
            .then((json) => {
                let parsed = parseDataCompare(json)
                if (parsed[0].data !== undefined) {
                    setMaxSlider(parsed[0].data.length);
                } else {
                    setMaxSlider(parsed[0].timeline.length);
                }
                setGlobal(parsed[0])
                setLoaded(true);
            });
    };

    useEffect(() => {
        loadMaxData()
        setSlider(maxSlider)
    }, [maxSlider]);

    useEffect(() => {
        loadData()
    }, [slider, country]);

    useEffect(() => {
        setCountry({
            ...country, first: query.get('country') ?? 'all',
            second: query.get('country2') === null ? '' : (query.get('country2') === 'World' ? 'all' : query.get('country2'))
        });
        (query.get('country2') === null) ?
            setCompare(false) :
            setCompare(true)
    }, [query]);



    return { histData, maxSlider, loaded, query, slider, country, compare, setCompare, setSlider, setCountry, setLoaded };
};

export const LineChartHist = () => {
    const history = useHistory()
    const { histData, slider, loaded, country, maxSlider, query, compare, setCompare, setSlider, setCountry } = useHistoricalData();

    const firstQuery = query.get('country') !== (null && '') ? '?country=' + query.get('country') : '';
    const classes = useStyles()

    const searchByCountry = (e) => {
        if (e === 'World') e = 'all'
        setCountry({ ...country, first: e })
    }

    const searchByCountry2 = (e) => {
        if (e === 'World') e = 'all'
        setCountry({ ...country, second: e })
    }

    const changeCompare = () => {
        setCompare(!compare)
        if (compare) {
            setCountry({ ...country, second: '' })
            history.push(firstQuery ? firstQuery + '' : '?')
        } else {
            setCountry({ ...country, second: 'all' })
            history.push((firstQuery ? firstQuery + '&' : '?') +
                'country2=World')
        }
        window.scrollTo(0, 0)
    }

    return (
        <React.Fragment>
            {maxSlider > 1 && (<React.Fragment>
                <Box children="COVID over time" className={classes.cntry} component="h1" />
                <Box className={classes.filters}>
                    <CountrySelect def={query.get('country') ?? 'World'} compare={false} trig={searchByCountry} />
                    {compare && (<CountrySelect def={query.get('country2') ?? 'World'} compare={true} trig={searchByCountry2} />)}
                    <Box className={classes.slider}>
                        <Slider onChangeCommitted={(e, n) => setSlider(n)} valueLabelFormat={(days) => <Box>Last {days} days</Box>} valueLabelDisplay="on" min={2} max={maxSlider} value={slider} aria-label="Default" />
                    </Box>
                </Box>
                <Box className={classes.root}>
                    {loaded && (
                        <LineChartMany compare={compare} data={histData} />)}
                </Box>
                <Box className={classes.fab} sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab variant="extended" color="primary" onClick={() => changeCompare()}>
                        {!compare ? <AddIcon /> : <RemoveIcon />} Compare
                    </Fab>
                </Box>
            </React.Fragment>)}
        </React.Fragment >
    );
};
