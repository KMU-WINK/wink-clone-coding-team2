import React, {useState} from "react"
import "./QuestionBox.css"
import {QuestionList} from "./QuestionList"
import {QuestionFlex} from "./QuestionFlex"

function Question({quest, order, changeInputs}){
    return(
        <div className="Question">
            <div className="text">{order}. <b>{quest.question}</b></div>
            <QuestionFlex 
            bold={quest.answer_bold} 
            answer={quest.answer} 
            order={order}
            changeInputs={changeInputs}
            />
        </div>
    )
}

export function QuestionBox(){
    const [inputs, setInputs] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const changeInputs = (e) => {
        const {name, value} = e.target;
        setInputs([...inputs.slice(0, name-1), parseInt(value), ...inputs.slice(name, 11)]);
        console.log(inputs);
    }
    const resetInputs = () => {
        setInputs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    return(
        <div className="PageWrap">
            {QuestionList.map((questbox, i) => (
                <div className="QuestionBox" style={i === 0 ? {display: "inline-block"} : {display: "none"}}>
                    {questbox.map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={i*11 + index+1} 
                    key={index}
                    changeInputs={changeInputs}
                    />
                ))}
                </div>
            ))}
        </div>
    )
}
