import React from "react"
import './TypeCircle.css'
import lank1 from '../images/statistics-lank-01.png'
import lank2 from '../images/statistics-lank-02.png'
import lank3 from '../images/statistics-lank-03.png'

export function TypeCircle(){
    return (
        <ul class = "TypeCircleWrap">
            <li class ="TypeCircle">
                <div>
                    <div class="wrapItem">
                        <span class="rank"><img src={lank1}></img></span>
                    </div>
                </div>
            </li>
            <li class ="TypeCircle">
                <div>
                    <div class="wrapItem">
                        <span class="rank"><img src = {lank2}></img></span>
                    </div>
                </div>
            </li>
            <li class ="TypeCircle">
                <div>
                    <div class="wrapItem">
                        <span class="rank"><img src = {lank3}></img></span>
                    </div>
                </div>
            </li>
        </ul>
        
    );
}