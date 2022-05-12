import { useState } from "react";
import PrimarySearchAppBar from "./appBar";
import SearchGrid from "./datagrid";

function App() {

  const [flightStatus, setFlightStatus] = useState([])
  const [flightNumber, setFlightNumber] = useState("6E7932")
  const [date, setDate] = useState("2022-05-11")

  console.log(flightStatus);
  //console.log(flightStatus[0].greatCircleDistance);
  return (
    <>
      <PrimarySearchAppBar setFlightNumber={setFlightNumber} setDate={setDate} />
      <SearchGrid flightStatus={flightStatus} setFlightStatus={setFlightStatus} date={date} flightNumber={flightNumber} />
    </>
  );
}

export default App;
