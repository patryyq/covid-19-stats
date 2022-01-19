import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useWindowDimensions, getMenuHeight } from '../getWindowSize'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import "./Map.css"
import MyLocationIcon from '@mui/icons-material/MyLocation'
import Fab from '@mui/material/Fab'
import L from 'leaflet'
import userLocationIcon from './user-location.svg'

const useStyles = makeStyles((theme) => ({
    flag: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        background: "#000"
    },
    fab: {
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: "400"
    },
}))
export default function Map() {
    const classes = useStyles()
    const { height } = useWindowDimensions();
    const [menu, setMenu] = useState(getMenuHeight())
    const [mapData, setMapData] = useState({ loading: true, data: [] })

    const loadMapData = () => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then((response) => response.json())
            .then((json) => {
                setMapData({ ...mapData, loading: false, data: json })
            });
    };

    useEffect(() => { setMenu(getMenuHeight()) }, [menu])
    useEffect(() => { loadMapData() }, [])

    return (
        <React.Fragment>
            {!mapData.loading && (
                <MapContainer
                    tap={false}
                    bounceAtZoomLimits={true}
                    maxBoundsViscosity={1}
                    maxBounds={[[-90, -180], [90, 180]]}
                    center={[51.505, -0.09]} minZoom={2} zoom={2} scrollWheelZoom={true} style={{ width: "100%", height: height - menu }}>
                    <TileLayer
                        attribution='Map tiles by Carto. Data by OpenStreetMap.'
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup showCoverageOnHover={false}>
                        {mapData.data.map((country) => (
                            <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]} >
                                <Popup>
                                    <Box className={classes.flag}> <b>{country.country}</b> <img alt="flag" width="30" src={country.countryInfo.flag} /></Box><br />
                                    Cases: <b>{country.cases}</b> <br />
                                    Deaths: <b>{country.deaths} </b><br />
                                    Recovered: <b>{country.recovered}</b> <br />
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>;
                    <FindUserLocation />
                </MapContainer>
            )
            }
        </React.Fragment >
    )
}

function FindUserLocation() {
    const classes = useStyles()
    const [userPosition, setUserPosition] = useState(null)
    const [marker, setMarker] = useState(false)
    const mapz = useMap()

    const showMark = () => {
        navigator.geolocation.getCurrentPosition((e) => setUserPosition([e.coords.latitude, e.coords.longitude]))
        if (userPosition !== null) {
            setMarker(true)
            mapz.flyTo(userPosition, 9)
        } else {
            setMarker(false)
        }
    }


    return (<React.Fragment>
        <Box className={classes.fab} sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" color="primary" onClick={() => showMark()}>
                <MyLocationIcon /> &nbsp;My Location
            </Fab>
        </Box>
        {marker !== false && (
            <Marker position={userPosition} icon={userLocationMarker} riseOnHover>
                <Popup keepInView closeOnClick={false}>You are here!</Popup>
            </Marker>
        )}
    </React.Fragment>)
}


const userLocationMarker = L.icon({
    iconUrl: userLocationIcon,
    iconSize: [40, 40],
    iconAnchor: [20, 5],
});


