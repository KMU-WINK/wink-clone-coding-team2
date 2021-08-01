import React from "react"
import "./Sns.css"

export function Sns() {
    
    return <div className="snsbox">
        <img src = "https://www.lllkkdti.com/content/images/main/movie-sns-wrap.png?v=1"/>
        <a href="https://www.facebook.com/what.is.lll" target="_blank" title="공식 페이스북 페이지로 이동" className="snsbtn facebook"></a>
        <a href="https://www.youtube.com/channel/UCcEr6k7Tw-uks1XxLCUi38A" target="_blank" title="공식 유튜브 페이지로 이동" className="snsbtn youtube"></a>
        <a href="https://www.instagram.com/what.is.lll/" target="_blank" title="공식 인스타그램 페이지로 이동" className="snsbtn insta"></a>
    </div>
}