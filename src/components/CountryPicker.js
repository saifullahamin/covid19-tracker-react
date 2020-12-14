import React, { useState } from "react";
import { NativeSelect, FormControl, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inside: {
    textAlign: "center",
  },
  container: {
    backgroundColor: "rgb(235, 235, 224)",
    padding: 15,
    boxShadow: "0px 5px rgb(245, 245, 239)",
  },
  heading: {
    marginTop: 4,
    fontWeight: 900,
    fontSize: 22,
  },
  current: {
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 30,
    opacity: 0.7,
  },
}));

const CountriesPicker = ({ handleCountryChange, countries }) => {
  const classes = useStyles();
  const [selectedCountry, setCountry] = useState("GLOBAL");

  return (
    <Grid>
      <Grid className={classes.container}>
        <Grid container className={classes.inside} spacing={3}>
          <Grid item xs={12} md={6} className={classes.heading}>
            COVID-19 Tracker
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <NativeSelect
                defaultValue=""
                onChange={(e) => {
                  handleCountryChange(e.target.value);
                  setCountry(e.target.value);
                }}
              >
                <option value="GLOBAL">Global</option>
                {countries.map((country, i) => (
                  <option key={i} value={country}>
                    {country}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.current}>
        <Grid>{selectedCountry}</Grid>
      </Grid>
    </Grid>
  );
};

export default CountriesPicker;
