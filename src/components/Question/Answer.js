import React from "react"
import "./Answer.css"

export function Answer({bold, answer, order, select, sendRadio, changeInputs}){
    const radioChange = (event) => {
        console.log(event.target.value);
        sendRadio(event.target.value);
        changeInputs(event);
    }
    return(
        <label className="Answer">
            <input type="radio" name={order} value={select} onChange={(e) => radioChange(e)}></input>
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