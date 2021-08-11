import React, {useState} from "react"
import "./PageBtn.css"
import { useDispatch } from "react-redux";
import { pushResult } from "./modules/result";

// let nonselectedcount = -1;

// function CheckedQuestions(inputs){
//     nonselectedcount = 0;
//     for(let i =0; i < inputs.length; i++){
//         if(inputs[i]===0){
//             nonselectedcount = nonselectedcount + 1;
//         }
//     }
// } // 선택 안 된 항목 개수 계산하는 함수

// function NextPage(page){
//     if(page === 3){
//         // resultpage로 넘어감
//     } else{
//         // 설정 초기화
//         nonselectedcount = -1;
//     }
// }

function BeforePageBtn({nonselectedcount}){
    return(
        <div className = "BeforePageBtn">{nonselectedcount}개의 항목이 남았습니다.</div>
    )
}

function AfterPageBtn(){
    let page = 1;
    const dispatch = useDispatch();
    const buttonClick = () => {
        dispatch(pushResult(page)); // page 변수에 따라 결과가 달라짐
    };
    return(
        <a className = "AfterPageBtn" value="1" onClick={buttonClick}>다음 설문 진행하기 →</a>
    )
}

export function PageBtn({nonselectedcount, inputscount}){
    console.log("pagebtn")
    if(nonselectedcount === 0){
        return(
            <div className="TestFooter"><AfterPageBtn/></div>
        )
    } else{
        if(nonselectedcount !== inputscount || nonselectedcount !== -1){
            return(
                <div className="TestFooter"><BeforePageBtn nonselectedcount={nonselectedcount}/></div>
            )
        }
    }
    console.log(nonselectedcount)
}

PageBtn.PropTypes={
    nonselectedcount: PropTypes.number,
    inputscount: PropTypes.number
}

BeforePageBtn.prototype={
    nonselectedcount: PropTypes.number
}