import React from "react";
import {Btn} from './components/Btn'
import { Participants } from "./components/Participants";
import { AvgLV } from "./components/AvgLV";

function App() {
  return (
      <>
        <Btn name="꼰대 유형 보기 >"/>
        <Participants number = "3,113,693"/>
        <AvgLV lv = "LV.2"/>
      </>
  );
}

export default App;
