import React from "react"
import "./Answer.css"

export function Answer({bold, answer, order}){
    return(
        <label className="Answer">
            <input type="radio" name={order}></input>
            <div className="RadioCircle">
                <div></div>
            </div>
            <div className="paragraph">
                <b>{bold}</b>
                {answer}
            </div>

        </label>
    )
}