import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { useWindowDimensions, getMenuHeight } from '../getWindowSize'
import React, { useState, useEffect } from "react";

export default function VerticalBarChartSingle() {
    const { height, width } = useWindowDimensions();
    const [state, setState] = useState({ countries: [] });
    const menuHeight = getMenuHeight()

    const getCountriesData = () => {
        fetch('https://disease.sh/v3/covid-19/continents?sort=cases')
            .then((res) => res.json())
            .then((data) => {
                setState({ countries: data.slice(0, 10) })
            })
    };

    useEffect(() => {
        getCountriesData();
    }, []);

    return (
        <BarChart layout="vertical" style={{
            margin: "0 auto"
        }} width={width - 12} height={height - menuHeight} data={state.countries} >
            <XAxis type="number" layout="vertical" />
            <YAxis dataKey="continent" type="category" layout="vertical" />
            <Tooltip layout="vertical" />
            <Legend />
            <Bar dataKey="cases" fill="#00109d" layout="vertical" />
            <Bar dataKey="deaths" fill="#d50000" layout="vertical" />
        </BarChart >
    )
}