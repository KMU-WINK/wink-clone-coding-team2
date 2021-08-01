import React, {useState} from "react"
import {TypeCircles} from "./TypeCircles.js"
import {Btn} from "./Btn"
import tit from "../images/statistics-tit.png"
import {TypeModal} from "./TypeModal";

export function TypesWrap(){

    const [open, setOpen] = useState(false);

    const clicked=()=>{
        setOpen(true)
    }

    const close=()=>{
        setOpen(false)
    }

    return(
        <div className="TypesWrap">
            <div className="Types">
                <div className="MostTypes">
                    <img src={tit} alt="statistics-tit"/>
                </div>
                <TypeCircles/>
                <div className="BtnBox">
                    <Btn
                    clicked={clicked}/>
                    {open && <TypeModal close={close}/>}
                </div>
            </div>
        </div>
    );
}