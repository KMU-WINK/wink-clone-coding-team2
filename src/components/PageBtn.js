import React from "react"
import "./PageBtn.css"
import { useSelector, useDispatch } from "react-redux";
import { pushResult, updatenonselected } from "./modules/result";

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

function AfterPageBtn(page){
    const dispatch = useDispatch();
    const buttonClick = (page) => {
        dispatch(pushResult(page)); // page 변수에 따라 결과가 달라짐
    };
    return(
        <a className = "AfterPageBtn" value="1" onClick={buttonClick}>다음 설문 진행하기 →</a>
    )
}

export function PageBtn(page){
    const dispatch = useDispatch();
    dispatch(updatenonselected());
    console.log("pagebtn");
    var currentnonselected = -1;
    var currentinputscount = 0;
    if(page===1){
        currentinputscount = useSelector(state => state.first.length)
    }
    if(firstnonselected === 0){
        return(
            <div className="TestFooter"><AfterPageBtn page={page}/></div>
        )
    } else{
        if(firstnonselected !== firstcount || firstnonselected !== -1){
            return(
                <div className="TestFooter"><BeforePageBtn nonselectedcount={firstnonselected}/></div>
            )
        }
    };
    console.log()
}


PageBtn.PropTypes={
    nonselectedcount: PropTypes.number,
    inputscount: PropTypes.number
}

BeforePageBtn.prototype={
    nonselectedcount: PropTypes.number
}