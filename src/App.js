import { useEffect, useState } from "react";
import PrimarySearchAppBar from "./appBar";
import SearchGrid from "./datagrid";

function App() {
  const [flightStatus, setFlightStatus] = useState([])
  const [flightNumber, setFlightNumber] = useState("6E7932")
  const [date, setDate] = useState("2022-05-11")
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
        'X-RapidAPI-Key': '091d3ca15fmshf687b8d71d5b41ep15a8d9jsn26fd0bb2a445'
      }
    };

    fetch('https://aerodatabox.p.rapidapi.com/flights/number/' + flightNumber + '/' + date + '', options)
      .then(response => response.json())
      .then(response => setFlightStatus(response))
      .catch(err => console.error(err));
  }, [])
  console.log(flightStatus);
  //console.log(flightStatus[0].greatCircleDistance);
  return (
    <>
      <PrimarySearchAppBar setFlightNumber={setFlightNumber} setDate={setDate} />
      {/* <SearchGrid /> */}
    </>
  );
}

export default App;
