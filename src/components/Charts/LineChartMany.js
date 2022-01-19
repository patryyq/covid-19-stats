import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useWindowDimensions } from '../getWindowSize'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    first: {
        background: "#feffc5",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    second: {
        background: "#d3f1ff",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }
}))
function LineChartMany(props) {
    const classes = useStyles()
    const { height, width } = useWindowDimensions();
    let firstDataset, secondDataset, length
    if (props.data[0] === undefined) {
        firstDataset = props.data[1]
    } else if (props.data.length === 1) {
        firstDataset = props.data[0].data
        firstDataset.country = props.data[0].country
    } else if (props.data[0] && props.data.length === 2 && props.data[1] !== undefined) {
        let data1Length = props.data[0].data.slice(0, props.data[0].data.length).length
        let data2Length = props.data[1].data.slice(0, props.data[1].data.length).length
        let data1 = props.data[0].data[props.data[0].data.length - 1]
        let data2 = props.data[1].data[props.data[1].data.length - 1]
        if (data1Length > data2Length) {
            length = data1Length - data2Length
        } else {
            length = data2Length - data1Length
        }
        if (data1.cases < data2.cases) {
            firstDataset = props.data[0].data.slice(0, props.data[0].data.length)
            secondDataset = props.data[1].data.slice(length, props.data[1].data.length)
            firstDataset.country = props.data[0].country
            secondDataset.country = props.data[1].country
        } else {
            firstDataset = props.data[1].data.slice(0, props.data[1].data.length)
            secondDataset = props.data[0].data.slice(length, props.data[0].data.length)
            firstDataset.country = props.data[1].country
            secondDataset.country = props.data[0].country
        }
    } else {
        firstDataset = props.data[0]
    }

    return (
        <React.Fragment>
            {firstDataset !== undefined && (
                <Box className={classes.first}>
                    <Box children="Cases" component="h1" />
                    <LineChart
                        width={width - 40}
                        height={height - 400}
                        data={firstDataset}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5, }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis interval dataKey="date" type="category" />
                        <YAxis mirror dataKey="cases" scale="linear" type="number" />
                        {!props.compare && (
                            <Tooltip />)}
                        <Legend />
                        <Line type="monotone" strokeWidth="4px" name={firstDataset.country} dataKey="cases" stroke="#333" dot={false} />
                        {secondDataset !== undefined && (
                            <Line type="monotone" strokeWidth="4px" data={secondDataset} name={secondDataset.country} dataKey="cases" stroke="#af0000" dot={false} />
                        )}

                    </LineChart></Box>)}
            {firstDataset !== undefined && (
                <Box className={classes.second}>
                    <Box children="Deaths" component="h1" />
                    <LineChart className={classes.second}
                        width={width - 40}
                        height={height - 400}
                        data={firstDataset}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5, }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis interval dataKey="date" type="category" />
                        <YAxis mirror dataKey="deaths" scale="linear" type="number" />
                        {!props.compare && (
                            <Tooltip />)}
                        <Legend />
                        <Line type="monotone" strokeWidth="4px" name={firstDataset.country} dataKey="deaths" stroke="#333" dot={false} />
                        {secondDataset !== undefined && (
                            <Line type="monotone" strokeWidth="4px" data={secondDataset} name={secondDataset.country} dataKey="deaths" stroke="#af0000" dot={false} />
                        )}

                    </LineChart></Box>)}</React.Fragment>
    );
}

export { LineChartMany }