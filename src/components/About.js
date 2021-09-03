import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import profile from "../img/profile.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes}>
      <Grid container>
        <Grid item xs>
          <img src={profile} alt="" width="800"/>
        </Grid>
        <Grid item xs>
          <p>
            My name is Emily Gomez and I'm a recent graduate with a Bachelors of
            Science in Computer Science from the University of Nebraska - Omaha
            in 2020. I had received minors in Studio Art and Mathematics as
            well. My focus is on front end development. I'm a quick learner and
            always willing to try new things. My favorite passtimes are
            traveling, cooking, and art.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
