import React, {useState} from "react"
import "./ButtonWrap.css"
import { NavLink } from 'react-router-dom';
import {TypeModal} from "./TypeModal";

export function ButtonWrap(){

    const [open, setOpen] = useState(false);

    const clicked=()=>{
        setOpen(true)
    }

    const close=()=>{
        setOpen(false)
    }

    return (
        <div className="buttonArea">
            <NavLink to="/">
                <div className="pageBtn green">
                    <img src="https://www.lllkkdti.com/content/images/result/resultview-page-btn-03.png" alt=""/>
                </div>
            </NavLink>
            <div className="pageBtn white" onClick={clicked}>
                <img src="https://www.lllkkdti.com/content/images/result/resultview-page-btn-02.png" alt=""/>
            </div>
            {open && <div className="wrapModal"><TypeModal close={close}/></div>}

        </div>

    )
}