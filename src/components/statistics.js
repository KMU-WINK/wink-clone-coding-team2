import React from "react";
import './statistics.css'

export function Statistics(props) {
    
    return <div className="statistics">
        <div className = "innerBox">
            <div>
                <img src = {props.url} alt = "통계"/>
            </div>
            <div className = "number"><strong>{props.number}</strong></div>
        </div>
    </div>;
}
