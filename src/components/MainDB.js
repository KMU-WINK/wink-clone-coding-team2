import React from "react"
import "./MainDB.css"
import {TypesWrap} from "./TypesWrap.js"

export function MainDB(){
    return (
        <div className="MainDB">
            <TypesWrap></TypesWrap>
            <div className="UserLevel"></div>
        </div>
    )
}