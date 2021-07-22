import React from "react"
import rank1 from "../images/statistics-lank-01.png"
import rank2 from "../images/statistics-lank-02.png"
import rank3 from "../images/statistics-lank-03.png"

export function Circle(props){
    let result;
    if(props.name === "1"){
        result = rank1;
    }
    else if(props.name === "2"){
        result = rank2;
    }
    else if(props.name === "3"){
        result = rank3;
    }

    return(
        <li class ="TypeCircle">
            <div>
                <div class="wrapItem">
                    <span class="rank"><img src={result} alt={props.name}></img></span>
                    <span class="type">{props.english}</span>
                    <strong class="typeName">{props.koreanTop}<br></br>{props.koreanBottom}</strong>
                </div>
            </div>
        </li>
    );
}
