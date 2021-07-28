import React from "react"

export function Answer({bold, answer}){
    return(
        <div className="Answer">
            <div className="RadioCircle"></div>
            <span>{bold}</span>
            <br></br>
            {answer}
        </div>
    )
}