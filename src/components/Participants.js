import React from "react";
import './Participants.css'

export function Participants(props) {
    return <div className="participants">
        <div className = "innerBox">
            <div>
                <img src = "https://www.lllkkdti.com/content/images/main/participants-tit.png" alt = "참여자 수"/>
            </div>
            <div className = "number"><strong>{props.number}</strong></div>
        </div>
    </div>;
}
