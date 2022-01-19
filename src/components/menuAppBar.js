import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import RightMenuDrawer from "./rightMenuDrawer";
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "1300",
    position: "relative",
    boxShadow: "none",
    backgroundColor: "#000",
    margin: 0,
    justifyContent: "space-between",
    boxSizing: "border-box",
    width: "100%",
    color: "#fff"
  },
  menuButton: {
    margin: 0,
    padding: 0,
    zIndex: "1500"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <RightMenuDrawer />
      <Toolbar className={classes.root} position="relative">
        <Typography variant="h6" fontWeight="bold" component="div">
          COVID-19 Stats</Typography>
        <MenuIcon
          id="topMenu"
          className={classes.menuButton}
          color="inherit">
        </MenuIcon>
      </Toolbar>
    </React.Fragment>
  );
}
