import React from "react"
import "./TestControl.css"
import { useDispatch, useSelector } from "react-redux"
import { backpage } from "./modules/result"

function Back() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    const buttonclick = () =>{
        dispatch(backpage());
    }
    if(page === 1){
        return(
            <a href="/" title="이전 페이지로 돌아가기" className="backbtn">
                <img src="https://www.lllkkdti.com/content/images/test/test-back-btn.png" alt="뒤로"/>
            </a>
        )
    } else if(page > 1){
        return(
            <div title="이전 페이지로 돌아가기" className="backbtn" onClick = {buttonclick()}>
                <img src="https://www.lllkkdti.com/content/images/test/test-back-btn.png" alt="뒤로"/>
            </div>
        )
    }
}

export function TestControl(props) {
    return (
        <div className="ControlWrap">
            <div className="control-box">
                <Back/>
                <p className="test-step">
                    꼰대성향 검사 (43문) : 
                    <strong className="current-step">
                        <span>{props.page}</span>
                        /4
                    </strong>
                </p>
            </div>
        </div>
    )
}