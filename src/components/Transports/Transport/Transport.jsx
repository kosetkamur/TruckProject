import React from 'react';
import icon from "../../../media/img/icon.svg";
import "./Transport.sass";
import auto from ".././../../media/img/auto.svg";

const Transport = ({ title, length, width, height, volume, load_capacity, load_side, capacity, help_text, transport_body, handleShow }) => {

    const handlePopupOpen = () => {
        handleShow()
    }


    return (
        <>
            <h3 className="title-transport">
                {title}
            </h3>
            <div className="transport">
                <div className="transport__subscribe">
                    <div className="transport__subscribe_values">
                    <div className="transport__subscribe_values__item">
                        <div className="transport__subscribe_values__item_img">
                            <img src={ icon } alt="иконка" />
                        </div>
                        <div className="transport__subscribe_values__item_text">
                            { load_capacity }
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item">
                        <div className="transport__subscribe_values__item_img">
                            <img src={ icon } alt="иконка" />
                        </div>
                        <div className="transport__subscribe_values__item_text">
                            { volume } м³
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item margin-item">
                        <div className="transport__subscribe_values__item_img">
                            <img src={ icon } alt="иконка" />
                        </div>
                        <div className="transport__subscribe_values__item_text">
                            { capacity } паллета
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item">
                        <div className="transport__subscribe_values__item_text">
                            Тип кузова: { transport_body }
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item">
                        <div className="transport__subscribe_values__item_text">
                            Загрузка: { load_side }
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item margin-item">
                        <div className="transport__subscribe_values__item_text">
                            Размеры кузова: { `${width}м x${length}м x${height}м` }
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item margin-item">
                        <div className="transport__subscribe_values__item_text">
                            <strong>{ help_text  }</strong>
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item">
                        <button className="transport__subscribe_values__item_button" onClick={ handlePopupOpen }>
                            Заказать перевозку этим авто
                        </button>
                    </div>
                </div>
                </div>
                <div className="transport__img">
                    <img src={ auto } alt={ title }/>
                </div>
            </div>
        </>
    );
};

export default Transport;