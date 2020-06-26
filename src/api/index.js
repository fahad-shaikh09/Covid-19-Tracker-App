import axios from "axios";


const url = "http://covid19.mathdro.id/api"

export const fetchData = async () => {

try {
    let data = await axios.get(url);
    // let jsonData = await data.json();
    // console.log("jsonData: " + data);
    return data;
} catch (error) {
    console.log("Error: " + error)
    }

}