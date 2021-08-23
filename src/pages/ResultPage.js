import React from "react";
import {ResultTitle} from "../components/ResultTitle";
import {ResultView} from "../components/ResultView";
import {Article} from "../components/Article";
import {ButtonWrap} from "../components/ButtonWrap";

export function ResultPage({ location }) {
    console.log(location);
    return <>
        <ResultTitle/>
        <ResultView type={location.search.slice(5, 8)} level={location.search[8]}/>
        <Article/>
        <ButtonWrap/>
</>
}