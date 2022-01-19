import React, { useState } from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { BiWorld } from "react-icons/bi";
import { FaMapMarkerAlt, FaChartLine, FaHome } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    zIndex: "1304",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  invisButton: {
    opacity: "0",
    zIndex: "1303",
    pointerEvents: "auto",
    position: "absolute",
    width: "2rem",
    right: "2.2rem",
    top: "0.75rem",
    height: "2rem",
  },
  cBlack: {
    color: "#000000",
    fontSize: "30px"
  },
  cGreen: {
    color: "#46ab07",
    fontSize: "30px"
  },
  cRed: {
    color: "#fb0c0c",
    fontSize: "30px"
  },
  cBlue: {
    color: "#25c196",
    fontSize: "30px"
  },
});

export default function LeftMenuDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <React.Fragment>
        <Link to="/">
          <ListItem button key={Math.random(0, 1234)}>
            <ListItemIcon>
              <FaHome className={classes.cBlack} />
            </ListItemIcon>
            <ListItemText primary="Summary" />
          </ListItem>
        </Link>
        <Link to="/historical">
          <ListItem button key={Math.random(0, 1234)}>
            <ListItemIcon>
              <FaChartLine className={classes.cGreen} />
            </ListItemIcon>
            <ListItemText primary="Historical" />
          </ListItem>
        </Link>
        <Link to="/map">
          <ListItem button key={Math.random(0, 1234)}>
            <ListItemIcon>
              <FaMapMarkerAlt className={classes.cBlue} />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
        </Link>
        <Link to="/continents">
          <ListItem button key={Math.random(0, 1234)}>
            <ListItemIcon>
              <BiWorld className={classes.cRed} />
            </ListItemIcon>
            <ListItemText primary="Continents" />
          </ListItem>
        </Link>
      </React.Fragment>
    </div>
  );

  return (
    <React.Fragment>
      <Box className={classes.invisButton}>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              className={classes.root}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
    </React.Fragment>
  );
}
