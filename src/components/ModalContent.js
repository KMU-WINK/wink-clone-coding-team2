import React from "react";
import {types} from './Type';
import './ModalContent.css'


function Type({type}) {

    return<div className="wrapContent">
            <div className="imageContent">
                <img className="typeImage" src={`https://www.lllkkdti.com/content/images/type/${type.id}.png`} alt=""/>
            </div>

            <div className="textContent">
                <strong>{type.name}의 특징</strong>
                {type.feat.map( (v,index) => {
                    return (
                        <p key={index}>- {v}</p>
                    )
                })}
                <strong>{type.name}를 꼰대로 만났을 때 대처 법</strong>
                {type.sol.map( (v,index) => {
                    return (
                        <p key={index}>- {v}</p>
                    )
                })}
            </div>
        </div>;

}

export function ModalContent() {

    return (
        <div className="content">
            {types.map((type, index) => (
                <Type type={type} key={index} />
            ))}
        </div>
    );
}
