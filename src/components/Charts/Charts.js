import React,{ useEffect } from 'react';
import {useState} from "react";
import {fetchDailyData} from "../../api"; 
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';
// import {fetchCountries} from "../../api"

var dailyDatafromApiComp;

const Charts = ({country, data:{confirmed,recovered,deaths}}) => {
console.log("Data prop in Charts: Confirmed", confirmed)
console.log("Data prop in Charts: Recovered", recovered)
console.log("Data prop in Charts: Deaths", deaths)
console.log("Country prop in Charts", country)

  let [everyday,setEveryday] = useState([]);
  // let [country,setCountry] = useState("")

useEffect(() => {
  const fetchApi = async () => {
     dailyDatafromApiComp = await fetchDailyData();
    //  console.log("Data in Charts.js: ", dailyDatafromApiComp);

    setEveryday(dailyDatafromApiComp);
    everyday.push(dailyDatafromApiComp);
    // everyday[0].map(item => console.log(item.confirmed.total))

    // countries = await fetchCountries();
    // console.log("Countries from Chart comp:", countries.map(country => country.name))
    // countries.map(i => console.log("Countries from Chart comp: ", i.name));
    // setCountry(countries)
    // country.push(countries)
    // console.log("State: Country: ", country)
  }
    fetchApi();
  },[]);

  // let [confirmed] = everyday.map(item=>item.confirmed.total)
  // let [recovered] = everyday.map(item=>item.recovered.total)
  // let [deaths] = everyday.map(item=>item.deaths.total)
  // let singleCountry = country.map(country => country.name)

    //  console.log("Data.confirmed in Charts.js props: ", data.confirmed);
    //  console.log("Data.recovered in Charts.js props: ", data.recovered);
    //  console.log("Data.deaths in Charts.js props: ", data.deaths);


  const barChart = (
    country ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value,recovered.value,deaths.value],
              },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );


  // everyday.map(item=>console.log("date: ", item.reportDate))

  const lineChart = (
    everyday[0] ? (
      <Line
        data={{
          labels: everyday.map(item=>item.reportDate),
          datasets: [{
            data: everyday.map((item) => item.confirmed.total),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: everyday.map((item) => item.deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );


  // console.log("country prop: ", country)
  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
      {/* {lineChart}  */}
      {/* {barChart} */}


    </div>
  )
}
export default Charts;