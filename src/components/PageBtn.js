import React, {useState} from "react"
import "./PageBtn.css"
import { useDispatch } from "react-redux";
import { pushResult } from "./modules/result";

function BeforePageBtn(){
    return(
        <a className = "BeforePageBtn">11개의 항목이 남았습니다.</a>
    )
}

function AfterPageBtn(){
    const dispatch = useDispatch();
    const buttonClick = (page) => {
        dispatch(pushResult(page)); // page 변수에 따라 결과가 달라짐
    };
    return(
        <a className = "AfterPageBtn" value="1" onClick={buttonClick}>다음 설문 진행하기 →</a>
    )
}

export function PageBtn(){
    return(
        <div className="TestFooter"><AfterPageBtn/></div>
    )
}


// const selectedcount = 0;
// const page = 0;
// const nonselectedcount = 0;

// function CheckedQuestions(){
//     if(page==0){
//         for(let i =0; i<11; i++){
//             if(버튼 체크확인 조건문) selectedcount = selectedcount + 1;
//         }
//     }
// }

// function RemainingQuestions(){
//     CheckedQuestions();
//     if(page!=3){
//         nonselectedcount = 11-selectedcount;
//         return(<span>{nonselectedcount}</span>
//         )
//     } else{
//         nonselectedcount = 10-selectedcount;
//         return(<span>{nonselectedcount}</span>
//         )
//     }
// }

// export function PageBtn(){
//     if(nonselectedcount != 0){
//         return(
//             <div className="TestFooter"><AfterPageBtn/></div>
//         )
//     } else{
//         return(
//             <div className="TestFooter"><BeforePageBtn/></div>
//         )
//     }
// }
