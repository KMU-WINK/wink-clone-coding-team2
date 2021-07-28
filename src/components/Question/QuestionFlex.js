import React from "react"
import "./QuestionFlex.css"
import {Answer} from "./Answer"

export function QuestionFlex({bold, answer}){
    return(
        <div className="QuestionFlex">
            <Answer bold={bold[0]} answer={answer[0]}/>
            <Answer bold={bold[1]} answer={answer[1]}/>
            <Answer bold={bold[2]} answer={answer[2]}/>
            <Answer bold={bold[3]} answer={answer[3]}/>
        </div>
    )
}