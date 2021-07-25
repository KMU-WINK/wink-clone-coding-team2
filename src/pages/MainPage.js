import React from "react";
import {Title} from '../components/Title';
import {MainDB} from '../components/MainDB'
import { NavLink } from 'react-router-dom';

export function MainPage() {

    return <>
        <Title/>
        <MainDB/>
        <button><NavLink to="/Test">Test</NavLink></button>
    </>

}
