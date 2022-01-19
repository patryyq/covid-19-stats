import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import { FcBiotech, FcCloseUpMode, FcAssistant, FcBullish } from "react-icons/fc";
import SimpleDateTime from 'react-simple-timestamp-to-date';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "550px",
        width: "45%",
        backgroundColor: "#e0e0e0",
        margin: "1.7rem 1rem",
        boxSizing: "border-box",
        [theme.breakpoints.down('990')]: {
            backgroundColor: '#333',
            width: "85%",
            margin: "1rem 0.7rem",
        }
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: { position: "absolute", top: "-15px", right: 0 }
}));

export default function KeyDataCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography align="left" variant="body1" fontWeight="bold" component="div">
                        Total {props.props} {props.children[3]}
                    </Typography>
                    <Typography className={classes.card} variant="h4" position="relative" fontWeight="bold" component="div" color={props.prop} >
                        {props.children[0]}
                        {props.children[1] === 'FcBiotech' && <FcBiotech className={classes.icon} size="47" />}
                        {props.children[1] === 'FcCloseUpMode' && <FcCloseUpMode className={classes.icon} size="47" />}
                        {props.children[1] === 'FcAssistant' && <FcAssistant className={classes.icon} size="47" />}
                        {props.children[1] === 'FcBullish' && <FcBullish className={classes.icon} size="47" />}
                    </Typography>
                    {props.children[2] != null && (<Box textAlign="right">
                        <b><SimpleDateTime dateSeparator="/" format="MYD" timeSeparator=":" meridians="1">{props.children[2] / 1000}</SimpleDateTime></b></Box>)}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}