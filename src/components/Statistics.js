import React from "react"
import "./Statistics.css"
import {TypeCircles} from "./TypeCircles.js"
import {Btn} from "./Btn"
import tit from "../images/statistics-tit.png"

export function Statistics(){
    return (
        <div class="Statistics">
            <div class="TypesWrap">
                <div class="Types">
                    <div class="MostTypes">
                        <img src={tit} alt="statistics-tit"></img>
                    </div>
                    <TypeCircles></TypeCircles>
                    <div class="BtnBox"><span class="Btn">꼰대 유형 보기</span></div>
                </div>
            </div>
            <div class="UserLevel"></div>
            
        </div>
    )
}