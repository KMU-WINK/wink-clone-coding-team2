import React from "react";
import './ResultView.css'
import Script from 'react-load-script';


export function ResultView() {
    return <div className="resultView">
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

    </div>;
}
