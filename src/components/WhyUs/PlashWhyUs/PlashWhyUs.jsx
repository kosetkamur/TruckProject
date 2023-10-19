import React from 'react';
import {backendHost} from "../../../const";

const PlashWhyUs = ({ description, icon, card_color }) => {
    return (
        <div className="plash" style={{backgroundColor: `${card_color}`}}>
            <div className="plash__title">{ description }</div>
            <div className="plash__img">
                <img src={ `${backendHost}${icon}` } alt="карточка" />
            </div>
        </div>
    );
};

export default PlashWhyUs;