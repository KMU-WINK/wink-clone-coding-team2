import React from "react"
import './TypeCircles.css'
import {Circle} from './Circle'

export function TypeCircles(){
    return (
        <ul className = "TypeCircleWrap">
            <Circle name="1" english="GRC" koreanTop="조용한" koreanBottom = "암살자"></Circle>
            <Circle name="2" english="GEC" koreanTop="속보이는" koreanBottom = "전자두뇌"></Circle>
            <Circle name="3" english="GRC" koreanTop="옹졸한" koreanBottom = "평화주의자"></Circle>
        </ul>
    );
}