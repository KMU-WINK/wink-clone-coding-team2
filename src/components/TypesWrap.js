import React from "react"
import {TypeCircles} from "./TypeCircles.js"
import {Btn} from "./Btn"
import tit from "../images/statistics-tit.png"

export function TypesWrap(){
    return(
        <div className="TypesWrap">
            <div className="Types">
                <div className="MostTypes">
                    <img src={tit} alt="statistics-tit"/>
                </div>
                <TypeCircles/>
                <div className="BtnBox"><span className="Btn">꼰대 유형 보기</span></div>
            </div>
        </div>
    );
}