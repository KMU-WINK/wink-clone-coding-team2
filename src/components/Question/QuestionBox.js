import React from "react"
import "./QuestionBox.css"
import {QuestionList} from "./QuestionList"
import {QuestionFlex} from "./QuestionFlex"
import { useSelector } from "react-redux"
import { TestControl } from "../TestControl"
import { PageBtn } from "../PageBtn"

function Question({quest, order}){
    return(
        <div className="Question">
            <div className="text">{order}. <b>{quest.question}</b></div>
            <QuestionFlex 
            bold={quest.answer_bold} 
            answer={quest.answer} 
            order={order}
            />
        </div>
    )
}

export function QuestionBox(){
    const page = useSelector(state => state.result.page);
    return(
        <div className="PageWrap">
            <TestControl page={page}/>
            <div className="QuestionBox" style={page === 1 ? {display: "inline-block"} : {display: "none"}}>
                {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={index+1} 
                    key={index}
                    />
                ))}
                <PageBtn/>
            </div>
            <div className="QuestionBox" style={page === 2 ? {display: "inline-block"} : {display: "none"}}>
                <div className="mentimg">
                    <img src="https://www.lllkkdti.com/content/images/test/test-step-ment-01.png"></img>
                </div>
                {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={11 + index+1} 
                    key={index}
                    />
                ))}
                <PageBtn/>
            </div>
            <div className="QuestionBox" style={page === 3 ? {display: "inline-block"} : {display: "none"}}>
                <div className="mentimg">
                    <img src="https://www.lllkkdti.com/content/images/test/test-step-ment-02.png"></img>
                </div>
                {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={22 + index+1} 
                    key={index}
                    />
                ))}
                <PageBtn/>
            </div>
            <div className="QuestionBox" style={page === 4 ? {display: "inline-block"} : {display: "none"}}>
                <div className="mentimg">
                    <img src="https://www.lllkkdti.com/content/images/test/test-step-ment-03.png"></img>
                </div>
                {QuestionList[page-1].map((quest, index) => (
                    <Question 
                    quest={quest} 
                    order={33 + index+1} 
                    key={index}
                    />
                ))}
                <PageBtn/>
            </div>
        </div>
    )
}
