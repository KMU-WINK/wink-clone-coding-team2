import React from "react"
import "./PageBtn.css"
import { useSelector, useDispatch } from "react-redux";
import { pushResult, updatenonselected } from "./modules/result";
import PropTypes from 'prop-types';

function BeforePageBtn({nonselectedcount}){
    return(
        <div className = "BeforePageBtn">{nonselectedcount}개의 항목이 남았습니다.</div>
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
    const dispatch = useDispatch();
    var page = useSelector(initiolState => initiolState.page);
    dispatch(updatenonselected(page));
    console.log("pagebtn");
    var nonselectedcount = useSelector(initiolState => initiolState.nonselectedcount);
    var pageinputscount = useSelector(initiolState => initiolState.pageinputscount);
    if(page !== 0){
        if(nonselectedcount === 0 && pageinputscount !== 0){
            return(
                <div className="TestFooter"><AfterPageBtn page={page}/></div>
            )
        } else{
            if((nonselectedcount !== pageinputscount || nonselectedcount !== -1) && pageinputscount !== 0){
                return(
                    <div className="TestFooter"><BeforePageBtn nonselectedcount={nonselectedcount}/></div>
                )
            }
        }
    }
    console.log(page);
    console.log(nonselectedcount);
    console.log(pageinputscount);
}


// PageBtn.PropTypes={
//     page: PropTypes.number,
// }

// BeforePageBtn.prototype={
//     nonselectedcount: PropTypes.number
// }