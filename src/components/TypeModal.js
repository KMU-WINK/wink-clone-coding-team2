import React from "react";
import './TypeModal.css'
import {ModalContent} from "./ModalContent";


export function TypeModal({close}) {

    return <div className="modal" onClick={close} >
                <div className="close">
                    <img src="	https://www.lllkkdti.com/content/images/main/modal-type-closebtn.png" alt=""/>
                </div>
                <div className="header">
                    <img src="https://www.lllkkdti.com/content/images/main/modal-type-tit.png" alt=""/>
                </div>
                <ModalContent/>
            </div>;

}


