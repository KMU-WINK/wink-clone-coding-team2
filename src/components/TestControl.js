import React from "react"
import "./TestControl.css"

export function TestControl(props) {
    
    return <div className="ControlWrap">
        <div className="control-box">
            <a href="/" title="이전 페이지로 돌아가기" className="backbtn">
                <img src="https://www.lllkkdti.com/content/images/test/test-back-btn.png" alt="뒤로"/>
            </a>
            <p class="test-step">
                꼰대성향 검사 (43문) : 
                <strong className="current-step">
                    <span>{props.page}</span>
                    /4
                </strong>
            </p>
        </div>
    </div>
}