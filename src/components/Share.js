import React from "react";
import './Share.css';
import kakao from "../images/speech-bubble.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";

export function Share() {
    return <div className="share">
        <div className = "share__text">
            <span>꼰대 성향 검사</span>
            <span>공유하기</span>
        </div>
        <div className = "share__btns">
            <a href = "#">b</a>
            <a href = "#"><img src={kakao}/></a>
            <a href = "#"><img src={facebook}/></a>
            <a href = "#"><img src={twitter}/></a>
            <a href = "#">URL</a>
        </div>
    </div>;
}
