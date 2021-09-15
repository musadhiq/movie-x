import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie-X
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
