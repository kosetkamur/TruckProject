import React, {useEffect, useState}  from 'react';

import "./Contacts.sass";
import Button from "./Button/Button";
import map from "../../media/img/map.png";
import {getContancts} from "../../api/getContanctsData";

const Contacts = () => {

    const [ contacts, setContacts ] = useState([]);

    useEffect(() => {
        getContancts().then(data => setContacts(data));
    }, []);

    return (
        <div className="contacts-component" id="contacts">
            <div className="contacts-component__contact">
                <div className="contacts-component__contact_title">
                    <p className="contacts-component__contact_title__info">
                        Звоните или пишите по любому вопросу, будем рады Вас проконсультировать
                    </p>
                </div>
                <div className="contacts-component__contact_ref">
                    <a href="tel:+7(999) 967-99-53"><Button title={"Телефон"} address={ contacts.phone } key={"tel"} /></a>
                    <a href="tel:+7(910) 850-40-16 "><Button title={"Служба логистики"} address={ contacts.logistics_service_phone } key={"tel2"} /></a>
                </div>
                <div className="contacts-component__contact_ref">
                    <a href="https://yandex.ru/maps/?rtext=~55.776502%2C37.537119"><Button title={"Юр. адрес"} address={ contacts.legal_address } key={"address"} /></a>
                    <a href="mailto:pm-2023@indox.ru"><Button title={"E-mail"} address={ contacts.email} key={"email"} /></a>
                </div>
            </div>
            <div className="contacts-component__map">
                <img src={ map } alt="карта" />
            </div>
        </div>
    );
};

export default Contacts;