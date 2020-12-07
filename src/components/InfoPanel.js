import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    margin: "0 auto",
    marginTop: 50,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottom: "5px solid rgba(255, 153, 0, 0.9)",
    paddingTop: 40,
    paddingBottom: 25,
    fontSize: 20,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottom: "5px solid rgba(51, 204, 51, 0.7)",
    paddingTop: 40,
    paddingBottom: 25,
    fontSize: 20,
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottom: "5px solid rgba(255, 0, 0, 0.7)",
    paddingTop: 40,
    paddingBottom: 25,
    fontSize: 20,
  },
  num: {
    fontSize: 30,
    fontWeight: "bold",
  },
  date: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 15,
  },
}));

export default function InfoPanel({ data }) {
  const classes = useStyles();
  if (Object.keys(data).length === 0) {
    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} lg={4}>
            <Paper className={classes.paper1} elevation={3}>
              Infected
              <br /> <br />
              <span className={classes.num}>0</span>
              <p className={classes.date}>-</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Paper className={classes.paper2} elevation={3}>
              Recovered
              <br /> <br />
              <span className={classes.num}>0</span>
              <p className={classes.date}>-</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Paper className={classes.paper3} elevation={3}>
              Deaths
              <br /> <br />
              <span className={classes.num}>0</span>
              <p className={classes.date}>-</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} lg={4}>
          <Paper className={classes.paper1} elevation={3}>
            Infected
            <br /> <br />
            <CountUp
              className={classes.num}
              start={0}
              end={data.confirmed}
              duration={0.8}
              separator=","
            />
            <br />
            <p className={classes.date}>
              Updated on {new Date(data.lastUpdate).toDateString()}
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Paper className={classes.paper2} elevation={3}>
            Recovered
            <br /> <br />
            <CountUp
              className={classes.num}
              start={0}
              end={data.recovered}
              duration={0.8}
              separator=","
            />
            <br />
            <p className={classes.date}>
              Updated on {new Date(data.lastUpdate).toDateString()}
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Paper className={classes.paper3} elevation={3}>
            Deaths
            <br /> <br />
            <CountUp
              className={classes.num}
              start={0}
              end={data.deaths}
              duration={0.8}
              separator=","
            />
            <br />
            <p className={classes.date}>
              Updated on {new Date(data.lastUpdate).toDateString()}
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
