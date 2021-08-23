import React from "react"
import "./QuestionFlex.css"
import {Answer , Answer2, Answer3, Answer4} from "./Answer"
import { useSelector } from "react-redux";

export function QuestionFlex({bold, answer, order}){
    const page = useSelector(state => state.result.page);
    if(page === 1){
        return(
            <div className="QuestionFlex">
                {[0, 1, 2, 3].map((i) => (
                    <Answer 
                    bold={bold[i]} 
                    answer={answer[i]} 
                    order={order} 
                    select={i+1}
                    key={i}
                    />
                ))}
            </div>
        )
    } else if(page === 2){
        return(
            <div className="QuestionFlex">
                {[0, 1, 2, 3].map((i) => (
                    <Answer2 
                    bold={bold[i]} 
                    answer={answer[i]} 
                    order={order} 
                    select={i+1}
                    key={i}
                    />
                ))}
            </div>
        )
    } else if(page === 3){
        return(
            <div className="QuestionFlex">
                {[0, 1, 2, 3].map((i) => (
                    <Answer3 
                    bold={bold[i]} 
                    answer={answer[i]} 
                    order={order} 
                    select={i+1}
                    key={i}
                    />
                ))}
            </div>
        )
    } else if(page === 4){
        return(
            <div className="QuestionFlex">
                {[0, 1, 2, 3].map((i) => (
                    <Answer4 
                    bold={bold[i]} 
                    answer={answer[i]} 
                    order={order} 
                    select={i+1}
                    key={i}
                    />
                ))}
            </div>
        )
    }
}