import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Charts from './components/Charts/Charts';
import {fetchData} from "./api"
import {fetchCountries} from "./api"



function App() {
  let [data,setData] = useState({});
  let [country,setCountry] = useState("");


  useEffect( () => {
    async function getData() {
      let newData = await fetchData();
      setData(newData);
      // console.log("Data from API: " + JSON.stringify(newData))
      // console.log("Data from API", newData)

      let country = await fetchCountries();
      country = country.map(i=>i.name)
      setCountry(country);
      // console.log("Countries var in App:", country)
      } 
      getData();
      },[]
    )

    let handleCountryChange = async (name) => {
      const data = await fetchData(name);
      //  console.log("country in handleCountryChange fn: ", name)
      console.log("handleCountryChange of 1 country:", data)
      setData(data);
      setCountry(name);

    }
// console.log("country var in app.js's stats", country)
   

let {confirmed,deaths,recovered,lastUpdate} = data;
let {countries} = data;
  return (
    <div className="App">
      <h1>Covid-19 Tracker App</h1>
      <Cards data={data} confirmed={confirmed} deaths={deaths} recovered={recovered} lastUpdate={lastUpdate} />
      <br />
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Charts  country={country}/>

    </div>
  );
}

export default App;
