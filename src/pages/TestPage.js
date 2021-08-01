import React from "react";
import { TestControl } from "../components/TestControl";
import {TestTitle} from "../components/TestTitle";

export function TestPage() {

    return <>
        <TestTitle/>
        <TestControl page="1"/>
    </>

}