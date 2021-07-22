import React from "react";
import {Btn} from './components/Btn'
import {Title} from './components/Title';
import {TypeModal} from './components/TypeModal'

function App() {
  return (
      <>
        <Title/>
        <Btn name="꼰대 유형 보기 >"/>
        <TypeModal/>
      </>
  );
}

export default App;
