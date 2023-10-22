import React from 'react';

import './Popup.sass';
import Form from "../Form/Form";

const Popup = ({ handleClose, idTranport }) => {
    const handlePopupClose = () => {
        handleClose()
    }

    return (
        <div className='popup'>
            <div className="popup__container">
                <div className="popup__container_subscribe">
                    <h2 className="popup__container_subscribe__title">
                        Заявка на перевозку рефрижератором
                    </h2>
                    <button className="popup__container_subscribe__close" onClick={ handlePopupClose}>

                    </button>
                </div>
                <Form idTranport={idTranport} />
            </div>
        </div>
    );
};

export default Popup;
