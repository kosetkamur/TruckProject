import React from 'react';
import arrow from '../../../media/img/arrow.svg';
import "./Button.sass";

const Button = ({ title, address }) => {
    return (
        <div className="contact-button">
            <div className="contact-button__title">
                <p>{ title }</p>
                <img src={ arrow } alt="стрелочка"/>
            </div>
            <div className="contact-button__info">
                { address }
            </div>
        </div>
    );
};

export default Button;