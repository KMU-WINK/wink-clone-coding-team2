import React from "react"
import "./QuestionBox.css"
import {QuestionList} from "./QuestionList"
import {QuestionFlex} from "./QuestionFlex"
import { useSelector } from "react-redux"

function Question({quest, order}){
    return(
        <div className="Question">
            <div className="text">{order}. <b>{quest.question}</b></div>
            <QuestionFlex 
            bold={quest.answer_bold} 
            answer={quest.answer} 
            order={order}
            />
        </div>
    )
}

// style={page === 0 ? {display: "inline-block"} : {display: "none"}}

export function QuestionBox(){
    const page = useSelector(state => state.result.page);
    if(page === 1){
        return(
            <div className="PageWrap">
                <div className="QuestionBox" style={page === 1 ? {display: "inline-block"} : {display: "none"}}>
                    {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={(page-1)*11 + index+1} 
                    key={index}
                    />
                ))}
                </div>
            </div>
        )
    } else if(page === 2){
        return(
            <div className="PageWrap">
                <div className="QuestionBox" style={page === 2 ? {display: "inline-block"} : {display: "none"}}>
                    {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={(page-1)*11 + index+1} 
                    key={index}
                    />
                ))}
                </div>
            </div>
        )
    } else if(page === 3){
        return(
            <div className="PageWrap">
                <div className="QuestionBox" style={page === 3 ? {display: "inline-block"} : {display: "none"}}>
                    {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={(page-1)*11 + index+1} 
                    key={index}
                    />
                ))}
                </div>
            </div>
        )
    } else if(page === 4){
        return(
            <div className="PageWrap">
                <div className="QuestionBox" style={page === 4 ? {display: "inline-block"} : {display: "none"}}>
                    {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={(page-1)*11 + index+1} 
                    key={index}
                    />
                ))}
                </div>
            </div>
        )
    }
}
