import React from "react"
import "./QuestionBox.css"
import {QuestionList} from "./QuestionList"
import {QuestionFlex} from "./QuestionFlex"

function Question({quest, order}){
    return(
        <div className="Question">
            <strong className="text">{order}. {quest.question}</strong>
            <QuestionFlex bold={quest.answer_bold} answer={quest.answer} />
        </div>
    )
}

export function QuestionBox(){
    return(
        <div className="QuestionBox">
            {QuestionList.map((quest, index) => (
                <Question quest={quest} order={index+1}/>
            ))}
        </div>
    )
}
