import React, {useState} from "react"
import "./QuestionFlex.css"
import {Answer} from "./Answer"

export function QuestionFlex({bold, answer, order}){
    const [Radio, setRadio] = useState(null);
    return(
        <div className="QuestionFlex">
            {[0, 1, 2, 3].map((i) => (
                <Answer 
                bold={bold[i]} 
                answer={answer[i]} 
                order={order} 
                select={i+1}
                sendRadio={setRadio}
                />
            ))}
            
        </div>
    )
}