import React from "react"
import "./PageBtn.css"
import { useSelector, useDispatch } from "react-redux";
import { pushResult, updatenonselected, updatepage } from "./modules/result";

function BeforePageBtn({nonselectedcount}){
    return(
        <div className = "BeforePageBtn">{nonselectedcount}개의 항목이 남았습니다.</div>
    )
}

function AfterPageBtn(){
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    const buttonClick1 = () => {
        dispatch(pushResult()); // page 변수에 따라 결과가 달라짐
        dispatch(updatepage());
        window.scrollTo({top:0, behavior:'smooth'});
    };
    const buttonClick2 = () => {
        dispatch(pushResult());
        window.scrollTo({top:0, behavior:'smooth'});
    };
    if(page === 4){
        return(
            <a harf = "/result" className = "AfterPageBtn" onClick={buttonClick2}>다음 설문 진행하기 →</a>
        )
    }else{
        return(
            <div className = "AfterPageBtn" onClick={buttonClick1}>다음 설문 진행하기 →</div>
        )
    }
}

export function PageBtn(){
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    dispatch(updatenonselected(page));
    console.log("pagebtn");
    const nonselectedcount = useSelector(state => state.result.nonselectedcount);
    const pageinputscount = useSelector(state => state.result.pageinputscount);
    console.log("page:" + page);
    
    if(nonselectedcount !== pageinputscount && nonselectedcount !== -1){
        if(nonselectedcount !== 0 && pageinputscount !== 0){
            return(
                <div className="TestFooter"><BeforePageBtn nonselectedcount={nonselectedcount}/></div>
            )
        }else if(nonselectedcount === 0){
            return(
                <div className="TestFooter"><AfterPageBtn/></div>
            )
        }
    } else{
        return(
            <div></div>
        )
    }
}
