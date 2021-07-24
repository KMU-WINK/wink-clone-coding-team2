import React, {useState} from "react";
import {Btn} from './components/Btn'
import {Title} from './components/Title';
import {TypeModal} from './components/TypeModal'
import {MainDB} from './components/MainDB'

function App() {

    // const [open, setOpen] = useState(false);
    //
    // const clicked=()=>{
    //     setOpen(true)
    // }
    //
    // const close=()=>{
    //     setOpen(false)
    // }

    return (
      <div>
        <Title/>
        <MainDB/>
        {/*<Btn*/}
        {/*    clicked={clicked}*/}
        {/*/>*/}
        {/*  {open && <TypeModal close={close}/>}*/}
      </div>
    )

}
export default App;
