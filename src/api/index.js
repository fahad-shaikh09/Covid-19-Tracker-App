import axios from "axios";


const url = "http://covid19.mathdro.id/api"

export const fetchData = async () => {

try {
    let {data} = await axios.get(url);
    let modifiedData = {
        confirmed: data.confirmed,
        deaths: data.deaths,
        recovered: data.recovered,
        lastUpdate: data.lastUpdate,
    }
    return modifiedData;
} catch (error) {
    console.log("Error: " + error)
    }

}