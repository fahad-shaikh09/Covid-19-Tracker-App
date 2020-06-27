import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Charts from './components/Charts/Charts';
import {fetchData} from "./api"

function App() {
  let [data,setData] = useState({});

  useEffect( () => {
    async function getData() {
      let newData = await fetchData();
      setData(newData);
      // console.log("Data from API: " + JSON.stringify(newData))
      console.log("Data from API", newData)
      } 
      getData();
      },[]
    )

let {confirmed,deaths,recovered,lastUpdate} = data;
  return (
    <div className="App">
      <h1>Covid-19 Tracker App</h1>
      <Cards confirmed={confirmed} deaths={deaths} recovered={recovered} lastUpdate={lastUpdate} />
      <br />
      <CountryPicker />
      <Charts />

    </div>
  );
}

export default App;
