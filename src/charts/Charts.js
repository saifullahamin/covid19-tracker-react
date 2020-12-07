import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 100,
    maxWidth: "80%",
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "-1px 3px 8px 0px rgba(0,0,0,0.3)",
  },
}));

export default function Charts({ data }) {
  const classes = useStyles();

  if (Object.keys(data).length === 0) {
    return (
      <div className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} lg={6}>
            <Paper className={classes.paper}>
              <Doughnut data={{}} height={127} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Paper className={classes.paper}>
              <Bar
                data={{}}
                width={400}
                height={300}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  const data1 = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        data: [data.confirmed, data.recovered, data.deaths],
        backgroundColor: [
          "rgba(255, 153, 0, 0.9)",
          "rgba(51, 204, 51, 0.7)",
          "rgba(255, 0, 0, 0.7)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 153, 0, 1)",
          "rgba(51, 204, 51, 1)",
          "rgba(255, 0, 0, 1)",
        ],
      },
    ],
  };
  const data2 = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "COVID-19 Patients",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [data.confirmed, data.recovered, data.deaths],
      },
    ],
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} lg={6}>
          <Paper className={classes.paper}>
            <Doughnut data={data1} height={127} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Paper className={classes.paper}>
            <Bar
              data={data2}
              width={400}
              height={300}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
