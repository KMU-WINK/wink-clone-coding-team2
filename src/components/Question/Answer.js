import React from "react"
import "./Answer.css"
import { useSelector, useDispatch } from "react-redux";
import { updateInputs, updatenonselected } from "../modules/result";


export function Answer({bold, answer, order, select, sendRadio}){
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    const radioChange = (event) => {
        const {name, value} = event.target;
        const tmp = name - 1;
        sendRadio(value);
      //
        dispatch(updateInputs(parseInt(name%11), parseInt(name/11) + 1, value));
        
      //
//         dispatch(updateInputs(parseInt(tmp%11), parseInt(tmp/11) + 1, value));
//         dispatch(updatenonselected(page));
      //
//         dispatch(updateInputs(parseInt(name%11), parseInt(name/11) + 1, value));
//         let current = document.getElementById(`${order}`);
//         current.scrollIntoView({behavior:'smooth'});
    }
    const t = useSelector(state => state.result.first);
    console.log(t);
    return(
        <label className="Answer" id={order}>
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