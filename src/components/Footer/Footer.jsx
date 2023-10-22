import React,{useEffect, useState} from 'react';
import "./Footer.sass";
import logo from "../../media/img/logo.svg";
import {GetAgreement} from "../../api/getAgreement";
import {backendHost} from "../../const";

const Footer = () => {

    const [ file, setFile ] = useState();

    let agreementFile;

    useEffect(() => {
        GetAgreement().then(resp => {
            setFile(resp);
        });
    }, []);

    if(typeof file === 'object') {
        agreementFile = backendHost + file.file
    }


    return (
        <footer>
            <div className="footer__container">
                <div className="footer__container_logo">
                    <img src={ logo } alt="логотип компании ООО ПТК" />
                </div>
                <div className="footer__container_items">
                    <div className="footer__container_items__item">
                        <a href="#transport">Транспорт</a>
                    </div>
                    <div className="footer__container_items__item">
                        <a href="#conditions">Условия</a>
                    </div>
                    <div className="footer__container_items__item">
                        <a href="#contacts">Контакты</a>
                    </div>
                </div>
            </div>
            <div className="footer__politic">
                <div className="footer__politic_text">
                    <p className="footer__politic_text__p">
                        ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ПАССАЖИРСКАЯ ТРАНСПОРТНАЯ КОМПАНИЯ"
                    </p>
                </div>
                <div className="footer__politic_href">
                    <a href={ agreementFile } download>
                        Политика конфиденциальности
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;