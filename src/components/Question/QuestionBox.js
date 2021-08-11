import React from "react"
import "./QuestionBox.css"
import {QuestionList} from "./QuestionList"
import {QuestionFlex} from "./QuestionFlex"

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

export function QuestionBox(){
    return(
        <div className="PageWrap">
            {QuestionList.map((questbox, i) => (
                <div className="QuestionBox" style={i === 0 ? {display: "inline-block"} : {display: "none"}}>
                    {questbox.map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={i*11 + index+1} 
                    key={index}
                    />
                ))}
                </div>
            ))}
        </div>
    )
}
