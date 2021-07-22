import React from "react";
import './ModalContent.css'

export function ModalContent(props) {
    return <div className="content">
            <div className="imagecontent">
                <img className="typeimage" src={`./images/${props.src}.png`} alt=""/>
            </div>

            <div className="textcontent">
                <strong>만취한 장비 (GEA)의 특징</strong>
                <p>-대개 서글서글한 인상으로, 처음 만난 사람도 허물 없이 대하는 인간성을 가짐.</p>
                <p>-친화력이 흡사 그것이 알고 싶다 푸들 급.</p>
                <p>-개인의 업무 능력만큼이나 유기적인 조직 관계가 업무에 꼭 필요하다고 생각함.</p>
                <p>-은근히 계획적으로 행동하기를 좋아해서 업무 성과도 괜찮은 편이며 리더십 있다고 평가 받는 경우가 많음.</p>
                <p>-유혹에 약한 편.</p>
                <br/>
                <strong>만취한 장비 (GEA)를 꼰대로 만났을 때 대처 법</strong>
                <p>-유효타 칭찬 멘트 몇 가지를 외워둬라. 은근히 단순하다.</p>
                <p>-도저히 아부가 힘들다면 차라리 눈 밖에 나라. 최소한 당신을 귀찮게 하지는 않을 것이다.</p>
            </div>
    </div>;
}
