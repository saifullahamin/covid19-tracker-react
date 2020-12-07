import { useEffect, useState } from "react";
import "./App.css";
import { InfoPanel, CountryPicker } from "./components";
import { fetchData } from "./api";
import Charts from "./charts/Charts";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    getData();
  }, []);

  const handleCountryChange = async (country) => {
    let fetchedData;
    if (country === "Global") {
      fetchedData = await fetchData();
    } else {
      fetchedData = await fetchData(country);
    }
    setData(fetchedData);
  };
  return (
    <div>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <InfoPanel data={data} />
      <Charts data={data} />
    </div>
  );
}

export default App;
