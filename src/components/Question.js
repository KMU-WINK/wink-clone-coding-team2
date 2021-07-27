import React from "react"
import "./Question.css"
import {QuestionList} from "./QuestionList"

export function Question({quest}){
    return(
        <div className="Question">
            <strong className="text">{quest.index}. {quest.quest.question}</strong>
        </div>
    )
}

export function QuestionBox(){
    return(
        <div className="QuestionBox">
            {QuestionList.map((quest, index) => (
                <Question index={index+1} quest={quest}/>
            ))}
        </div>
    )
}
