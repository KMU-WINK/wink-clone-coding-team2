import React from "react"
import "./PageBtn.css"
import { useSelector, useDispatch } from "react-redux";
import { pushResult, updatenonselected } from "./modules/result";

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

export function PageBtn(page){
    const dispatch = useDispatch();
    dispatch(updatenonselected(page));
    console.log("pagebtn");
    var nonselectedcount = useSelector(state => state.nonselectedcount);
    var pageinputscount = useSelector(state => state.pageinputscount);
    if(nonselectedcount === 0){
        return(
            <div className="TestFooter"><AfterPageBtn page={page}/></div>
        )
    } else{
        if(nonselectedcount !== pageinputscount || nonselectedcount !== -1){
            return(
                <div className="TestFooter"><BeforePageBtn nonselectedcount={nonselectedcount}/></div>
            )
        }
    };
    console.log()
}


PageBtn.PropTypes={
    page: PropTypes.number,
}

BeforePageBtn.prototype={
    nonselectedcount: PropTypes.number
}