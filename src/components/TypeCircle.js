import React from "react"
import './TypeCircle.css'
import lank1 from '../images/statistics-lank-01.png'
import lank2 from '../images/statistics-lank-02.png'
import lank3 from '../images/statistics-lank-03.png'

export function TypeCircle(){
    return (
        <div id="testBox">
        <ul class = "TypeCircleWrap">
            <li class ="TypeCircle">
                <div>
                    <div class="wrapItem">
                        <span class="rank"><img src={lank1} alt="rank1"></img></span>
                        <span class="type">GRC</span>
                        <strong class="typeName">조용한<br></br>암살자</strong>
                    </div>
                </div>
            </li>
            <li class ="TypeCircle">
                <div>
                    <div class="wrapItem">
                        <span class="rank"><img src = {lank2} alt="rank1"></img></span>
                        <span class="type">GEC</span>
                        <strong class="typeName">속 보이는<br></br>전자두뇌</strong>
                    </div>
                </div>
            </li>
            <li class ="TypeCircle">
                <div>
                    <div class="wrapItem">
                        <span class="rank"><img src = {lank3} alt="rank1"></img></span>
                        <span class="type">PEC</span>
                        <strong class="typeName">옹졸한<br></br>평화주의자</strong>
                    </div>
                </div>
            </li>
        </ul>
        </div>
    );
}