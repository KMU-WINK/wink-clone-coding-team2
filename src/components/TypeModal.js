import React from "react";
import './TypeModal.css'
import {ModalContent} from "./ModalContent";


export function TypeModal({close}) {

    return <div className="modal" onClick={close} >
                <div className="close">
                    <img src="./images/close.png" alt=""/>
                </div>
                <div className="header">
                    <img src="./images/modal-title.png" alt=""/>
                </div>
                <ModalContent/>
            </div>;

}


