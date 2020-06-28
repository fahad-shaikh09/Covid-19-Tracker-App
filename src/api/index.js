import axios from "axios";


const url = "http://covid19.mathdro.id/api"

export const fetchData = async () => {
try {
    let {data} = await axios.get(url);
    let modifiedData = {
        confirmed: data.confirmed,
        deaths: data.deaths,
        recovered: data.recovered,
        lastUpdate: data.lastUpdate,}
    return modifiedData;
} catch (error) {
    console.log("Error: " + error)
    }
}


export const fetchDailyData = async () => {
try {
    let dailyData = await axios.get(`${url}/daily`);
    // console.log("DailyData from API component: ", dailyData);
    let {data} = dailyData;
    return data;

}
  catch (error) {
    console.log("Error", error)
    }

}

export const fetchCountries = async () => {
    try {
      let {data} = await axios.get(`${url}/countries`);
      let {countries} = data;
    //   console.log("fetchedCountries in API Comp: ", countries)
      return countries;
    } catch (error) {
        console.log("Error", error)
    }
  };