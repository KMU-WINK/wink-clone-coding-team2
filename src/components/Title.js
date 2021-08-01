import React from "react";
import './Title.css'
import {StartBtn} from "./StartBtn";
import {Share} from "./Share";
import { NavLink } from 'react-router-dom';

export function Title() {
    return <div className="main">
                <img className="title" src="https://www.lllkkdti.com/content/images/main/visual-text.png?v=3" alt=""/>
                <img className="computer" src="https://www.lllkkdti.com/content/images/main/visual-img-computer.png" alt=""/>
                <img className="note" src="https://www.lllkkdti.com/content/images/main/visual-img-note.png" alt=""/>
                <img className="ipad" src="https://www.lllkkdti.com/content/images/main/visual-img-device.png" alt=""/>
                <div className="btnWrap">
                    <NavLink to="/Test"><StartBtn/></NavLink>
                    <Share/>
                </div>
    </div>;
}
