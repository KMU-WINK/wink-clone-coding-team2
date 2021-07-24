import React from "react"
import "./MainDB.css"
import {TypesWrap} from "./TypesWrap.js"
import {Statistics} from "./statistics.js"

export function MainDB(){
    return (
        <div className="MainDB">
            <TypesWrap/>
            <div className="StatisticsWrap">
                <Statistics url = "https://www.lllkkdti.com/content/images/main/participants-tit.png" number = "3,116,053"/>
                <Statistics url = "https://www.lllkkdti.com/content/images/main/level-tit.png" number = "LV.2"/>
            </div>
        </div>
    )
}