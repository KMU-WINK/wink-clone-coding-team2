import React from "react"
import "./Footer.css"
import {Sns} from './Sns.js'
import {Email} from './Email.js'

export function Footer() {

    return <div className="footer">
        <Sns/>
        <div className= "line"></div>
        <Email/>
    </div>

}