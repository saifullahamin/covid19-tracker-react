const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const response = await fetch(changeableUrl);
    const data = await response.json();
    return {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
      lastUpdate: data.lastUpdate,
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${url}/countries`);
    const { countries } = await response.json();
    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
