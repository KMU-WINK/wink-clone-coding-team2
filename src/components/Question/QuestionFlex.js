import React, {useState} from "react"
import "./QuestionFlex.css"
import {Answer} from "./Answer"

export function QuestionFlex({bold, answer, order}){
    const [Radio, setRadio] = useState(null);
    return(
        <div className="QuestionFlex">
            <Answer 
            bold={bold[0]} 
            answer={answer[0]} 
            order={order} 
            select={1}
            Radio={Radio}
            sendRadio={setRadio}
            />
            <Answer 
            bold={bold[1]} 
            answer={answer[1]} 
            order={order} 
            select={2}
            Radio={Radio}
            sendRadio={setRadio}
            />
            <Answer 
            bold={bold[2]} 
            answer={answer[2]} 
            order={order} 
            select={3}
            Radio={Radio}
            sendRadio={setRadio}
            />
            <Answer 
            bold={bold[3]} 
            answer={answer[3]} 
            order={order} 
            select={4}
            Radio={Radio}
            sendRadio={setRadio}
            />
        </div>
    )
}