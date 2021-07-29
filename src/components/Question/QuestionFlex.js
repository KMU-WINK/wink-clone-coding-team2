import React from "react"
import "./QuestionFlex.css"
import {Answer} from "./Answer"

export function QuestionFlex({bold, answer, order}){
    return(
        <div className="QuestionFlex">
            <Answer bold={bold[0]} answer={answer[0]} order={order}/>
            <Answer bold={bold[1]} answer={answer[1]} order={order}/>
            <Answer bold={bold[2]} answer={answer[2]} order={order}/>
            <Answer bold={bold[3]} answer={answer[3]} order={order}/>
        </div>
    )
}