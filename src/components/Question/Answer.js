import React from "react"
import "./Answer.css"
import { useSelector, useDispatch } from "react-redux";
import { updateInputs } from "../modules/result";


export function Answer({bold, answer, order, select, sendRadio}){
    const dispatch = useDispatch();
    const radioChange = (event) => {
        const {name, value} = event.target;
        sendRadio(value);
        dispatch(updateInputs(parseInt(name%11), parseInt(name/11) + 1, value));
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