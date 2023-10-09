import React from 'react';
import "./Contacts.sass";
import Title from "../Title/Title";
import Button from "./Button/Button";
import map from "../../media/img/map.png";

const Contacts = () => {
    return (
        <div className="contacts-component" id="contacts">
            <div className="contacts-component__contact">
                <div className="contacts-component__contact_title">
                    <p className="contacts-component__contact_title__info">
                        Звоните или пишите по любому вопросу, будем рады Вас проконсультировать
                    </p>
                </div>
                <div className="contacts-component__contact_ref">
                    <a href="tel:+7(999) 967-99-53"><Button title={"Телефон"} address={"+7 999 967-99-53"} key={"tel"} /></a>
                    <a href="tel:+7(910) 850-40-16 "><Button title={"Служба логистики"} address={"+7(910) 850-40-16"} key={"tel2"} /></a>
                </div>
                <div className="contacts-component__contact_ref">
                    <Button title={"Юр. адрес"} address={"г.Москва, ш Хорошёвское 38"} key={"address"} />
                    <a href="mailto:ptk-gruz-moloko@mail.ru "><Button title={"E-mail"} address={"ptk-gruz-moloko@mail.ru "} key={"email"} /></a>
                </div>
            </div>
            <div className="contacts-component__map">
                <img src={ map } alt="карта" />
            </div>
        </div>
    );
};

export default Contacts;