import React from "react";
import './ResultView.css'
import {types, levels} from './Type';
import Script from 'react-load-script';

function ResultContent({result,level}) {

    return<div className="resultContent">

        <div className="textResult">
            <strong><span className="textLine"><span className="mark">{result.name}</span></span>의 특징</strong>
            {result.feat.map( (v,index) => {
                return (
                    <p key={index}>. {v}</p>
                )
            })}
            <br/>
            <strong><span className="textLine"><span className="mark">{result.name}</span></span>의 잠재적 꼰대 성향</strong>
            {result.pot.map( (v,index) => {
                return (
                    <p key={index}>. {v}</p>
                )
            })}
            <br/>

            <strong><span className="textLine"><span className="mark">{result.name}</span></span>꼰대 <span className="textLine"><span className="mark">레벨</span>{level}</span>의 특징</strong>
            {levels[0][level].map( (v,index) => {
                return (
                    <p key={index}>. {v}</p>
                )
            })}

            <br/>

            <strong><span className="textLine"><span className="mark">{result.name}</span></span>의 꼰대 탈출을 위한 솔루션</strong>
            {result.escape.map( (v,index) => {
                return (
                    <p key={index}>. {v}</p>
                )
            })}
            <br/>

            <strong>나와 동일한 <span className="textLine"><span className="mark">{result.name}</span></span>를 꼰대로 만났을 때 대처법</strong>
            {result.sol.map( (v,index) => {
                return (
                    <p key={index}>. {v}</p>
                )
            })}
            <br/>

        </div>
    </div>;

}

export function ResultView({type,level}) {

    const result = types.find(v => v.id === type);
    console.log(result)
    return <div className="resultView">
        <div className={`imageResult lv${level}`}>
            <img src={`https://www.lllkkdti.com/content/images/type/${type}_${level}.png?v=2`} alt=""/>
            <p className="txtImgSave">* 결과 이미지 저장 : 우클릭해서 이미지를 저장하기</p>
        </div>

        <div className="resultShare">
            <div className="shareBox">
                <img src="https://www.lllkkdti.com/content/images/result/resultview-share-tit-02.png" alt=""/>
                <div className="addthis_inline_share_toolbox_ybrn"/>
            </div>
            <div className="shareBox mail">
                <img src="https://www.lllkkdti.com/content/images/result/resultview-share-tit-01.png" alt=""/>
                <div className="form">
                    <input type="text" id="Email" name="Email"/>
                    <button type="button" id="btnSendMail">받기</button>
                </div>
                <div className="desc">
                    <p>※ 사용자가 많이 몰릴 경우 메일 발송이 지연 될 수 있습니다.<br/>※ 메일주소는 발송시만 사용되며 사이트에서 별도로 수집하지 않습니다.</p>
                </div>
            </div>
        </div>
        <Script url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6104c1876f397be9"/>

        <ResultContent result={result} level={level} />

    </div>;
}
