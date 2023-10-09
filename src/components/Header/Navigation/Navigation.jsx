import React from 'react';

import './Navigation.sass'
import logo from "../../../media/img/logo.svg";

const Navigation = () => {
    return (
        <nav>
            <div className="nav__container">
                <div className="nav__container_logo">
                    <a href="">
                        <img src={logo} alt="Логотип ООО ПТК"/>
                    </a>
                    <div className="nav__container_logo_subtitle">
                        ООО “ПТК”<br />
                        услуги логистики по РФ
                    </div>
                </div>
                <div className="nav__container_items">
                    <div className="nav__container_item">
                        <a href="#transport">Транспорт</a>
                    </div>
                    <div className="nav__container_item">
                        <a href="#conditions">Условия</a>
                    </div>
                    <div className="nav__container_item">
                        <a href="#contacts">Контакты</a>
                    </div>
                </div>
                <div className="nav__container_items">
                    <a className="nav__container_items__phone" href="tel:+7 999 967-99-53">+7 999 967-99-53</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;