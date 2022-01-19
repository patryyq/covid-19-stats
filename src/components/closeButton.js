import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import './closeButton.css'

export default function CloseButton(props) {
    return (
        <Box zIndex={props.ind} className={props.class}><CloseIcon onClick={props.hide} /></Box>)
}