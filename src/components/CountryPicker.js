import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Grid } from "@material-ui/core";
import { fetchCountries } from "../api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {},
  alignment: {
    textAlign: "right",
  },
  container: {
    backgroundColor: "rgb(235, 235, 224)",
    padding: 15,
    boxShadow: "0px 5px rgb(245, 245, 239)",
  },
  heading: {
    marginTop: 6,
    fontWeight: 900,
    fontSize: 22,
    paddingLeft: 10,
  },
}));

const CountriesPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchApi();
  }, []);

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={6} md={6} className={classes.heading}>
        COVID-19 Tracker
      </Grid>
      <Grid item xs={6} md={6} className={classes.alignment}>
        <FormControl variant="outlined" className={classes.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="global">Global</option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CountriesPicker;
