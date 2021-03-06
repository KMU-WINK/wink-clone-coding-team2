import React from "react";
import { TestControl } from "../components/TestControl";
import {TestTitle} from "../components/TestTitle";
import {QuestionBox} from "../components/Question/QuestionBox";
// redux
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from '../components/modules';
import { PageBtn } from "../components/PageBtn";

const store = createStore(rootReducer);

export function TestPage() {
    return <>
    <Provider store={store}>
        <TestTitle/>
        {/* <TestControl page="1"/> */}
        <QuestionBox/>
    </Provider>
    </>
}