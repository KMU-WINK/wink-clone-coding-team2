import React from "react";
import './Article.css'
import {YoutubeEmbed} from "./YoutubeEmbed";
import {Sns} from "./Sns";

export function Article() {
    return <div className="article">
        <img className="articleTitle" src="https://www.lllkkdti.com/content/images/main/movie-tit.png?v=2" alt=""/>
        <div className="contextWrap">
            <YoutubeEmbed embedId="xucBlkJ3BBU"/>
            <YoutubeEmbed embedId="jn9ZznU6J_s"/>
            <div className="textWrap">
                <p>
                    '르르르'는 꼰대에 대한 불만은 물론, <br/>
                    우리 주변에 존재하는 크고 작은 '될 성 부른 불만'들에 귀 기울입니다.<br/><br/>
                    불만을 진심으로 마주하고 해소하기 위해 노력한다면 오늘보다 조금 더 나은 내일이 될 수 있지 않을까요?<br/><br/>
                    <strong>불만해소 크리에이터, '르르르'입니다.</strong>
                </p>
                <Sns/>
            </div>
        </div>

    </div>;
}
