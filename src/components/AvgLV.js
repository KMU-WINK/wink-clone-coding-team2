import React from "react";
import './AvgLV.css'

export function AvgLV(props) {
    return <div className="avgLV">
        <div className = "innerBox">
            <div>
                <img src = "https://www.lllkkdti.com/content/images/main/level-tit.png" alt = "평균 꼰대 레벨"/>
            </div>
            <div className = "lv"><strong>{props.lv}</strong></div>
        </div>
    </div>;
}
