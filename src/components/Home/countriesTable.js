import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        maxWidth: "100px"
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function TableCountries(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700, maxWidth: 1200, margin: "1rem auto" }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Country</StyledTableCell>
                        <StyledTableCell align="right">Cases</StyledTableCell>
                        <StyledTableCell align="right">Deaths</StyledTableCell>
                        <StyledTableCell align="right">Recovered</StyledTableCell>
                        <StyledTableCell align="right">Active</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <StyledTableRow key={row.country}>
                            <StyledTableCell component="th" scope="row">
                                <img loading="lazy" alt="flag"
                                    height="20" width="38" style={{ paddingRight: "7px" }}
                                    src={row.countryInfo.flag}
                                />{row.country}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.cases}</StyledTableCell>
                            <StyledTableCell align="right">{row.deaths}</StyledTableCell>
                            <StyledTableCell align="right">{row.recovered}</StyledTableCell>
                            <StyledTableCell align="right">{row.active}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
