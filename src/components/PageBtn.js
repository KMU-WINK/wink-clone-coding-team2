import React from "react"
import "./PageBtn.css"
import PropTypes from "prop-types"

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

function BeforePageBtn(nonselectedcount){
    return(
        <div className = "BeforePageBtn">{nonselectedcount}개의 항목이 남았습니다.</div>
    )
}

function AfterPageBtn(){
    return(
        <div className = "AfterPageBtn">다음 설문 진행하기 →</div>
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

// PageBtn.proptype = {
//     nonselectedcount : PropTypes.number,
//     inputscount : PropTypes.number
// }
