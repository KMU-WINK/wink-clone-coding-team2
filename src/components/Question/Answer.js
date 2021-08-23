import React from "react"
import "./Answer.css"
import { useSelector, useDispatch } from "react-redux";
import { updateInputs, updatenonselected } from "../modules/result";

export function Answer({bold, answer, order, select}){
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    const radioChange = (event) => {
        const {name, value} = event.target;
        const tmp = name - 1;
        dispatch(updateInputs(parseInt(tmp%11), parseInt(tmp/11) + 1, value));
        dispatch(updatenonselected(page));
        let current = document.getElementById(`${order}`);
        current.scrollIntoView({behavior:'smooth'});
    }
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

export function Answer2({bold, answer, order, select}){
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    const radioChange = (event) => {
        const {name, value} = event.target;
        const tmp = name - 1;
        dispatch(updateInputs(parseInt(tmp%11), parseInt(tmp/11) + 1, value));
        dispatch(updatenonselected(page));
        let current = document.getElementById(`${order}`);
        current.scrollIntoView({behavior:'smooth'});
    }
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

export function Answer3({bold, answer, order, select}){
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    const radioChange = (event) => {
        const {name, value} = event.target;
        const tmp = name - 1;
        dispatch(updateInputs(parseInt(tmp%11), parseInt(tmp/11) + 1, value));
        dispatch(updatenonselected(page));
        let current = document.getElementById(`${order}`);
        current.scrollIntoView({behavior:'smooth'});
    }
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

export function Answer4({bold, answer, order, select}){
    const dispatch = useDispatch();
    const page = useSelector(state => state.result.page);
    const radioChange = (event) => {
        const {name, value} = event.target;
        const tmp = name - 1;
        dispatch(updateInputs(parseInt(tmp%11), parseInt(tmp/11) + 1, value));
        dispatch(updatenonselected(page));
        let current = document.getElementById(`${order}`);
        current.scrollIntoView({behavior:'smooth'});
    }
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