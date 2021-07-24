import React from "react";
import {Btn} from './components/Btn'
import { Statistics } from "./components/statistics";

function App() {
  return (
      <>
        <Btn name="꼰대 유형 보기 >"/>
        <Statistics url = "https://www.lllkkdti.com/content/images/main/participants-tit.png" number = "3,116,053"/>
        <Statistics url = "https://www.lllkkdti.com/content/images/main/level-tit.png" number = "LV.2"/>
      </>
  );
}

export default App;
