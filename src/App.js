import { useEffect, useState } from "react";
import "./App.css";
import { InfoPanel, CountryPicker } from "./components";
import Charts from "./charts/Charts";

function App() {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
  const url = "https://covid19.mathdro.id/api";

  const fetchData = async (country) => {
    let changeableUrl = url;

    if (country !== "GLOBAL") {
      changeableUrl = `${url}/countries/${country}`;
    }
    try {
      const response = await fetch(changeableUrl);
      const data = await response.json();
      setData({
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastUpdate: data.lastUpdate,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData("GLOBAL");
  }, []);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${url}/countries`);
        const { countries } = await response.json();
        let countriesList = countries.map((country) => country.name);
        setCountries(countriesList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <CountryPicker handleCountryChange={fetchData} countries={countries} />
      <InfoPanel data={data} />
      <Charts data={data} />
    </div>
  );
}

export default App;
