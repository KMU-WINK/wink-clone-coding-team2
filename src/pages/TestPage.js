import React from "react";
import { TestControl } from "../components/TestControl";
import {TestTitle} from "../components/TestTitle";
import {QuestionBox} from "../components/Question/QuestionBox";

export function TestPage() {

    return <>
        <TestTitle/>
        <TestControl page="1"/>
        <QuestionBox/>
    </>

}