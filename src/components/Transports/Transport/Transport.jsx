import React from 'react';
import icon from "../../../media/img/icon.svg";
import icon2 from "../../../media/img/icon2.svg";
import icon3 from "../../../media/img/icon3.svg";
import "./Transport.sass";

const Transport = ({ cat, title, load_capacity, description, height, capacity, transport_body, load_side, length, width,volume, handleShow }) => {

    const handlePopupOpen = () => {
        handleShow(cat, title)
    }

    return (
        <div className="transport-container">
            <h3 className="transport-container__title">
                { title }
            </h3>
            <p className="transport-container__subscribe">
                { description }
            </p>
            <h4 className="transport-container__character">
                Характеристики
            </h4>
            <div className="transport-container__description transport">
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
                            <img src={ icon2 } alt="иконка" />
                        </div>
                        <div className="transport__subscribe_values__item_text">
                            { volume } м³
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item margin-item">
                        <div className="transport__subscribe_values__item_img">
                            <img src={ icon3 } alt="иконка" />
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
                            Размеры кузова: { `${width} м x ${length} м x ${height} м` }
                        </div>
                    </div>
                    <div className="transport__subscribe_values__item">
                        <button className="transport__subscribe_values__item_button" onClick={ handlePopupOpen }>
                            Заказать перевозку этим авто
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Transport;