import React from 'react';

import './Header.sass'
import Navigation from "./Navigation/Navigation";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Form from "../Form";
import auto from "../../media/img/fura.png"

const Header = () => {
    return (
        <header>
            {
                (window.innerWidth > 1023) ?  <Navigation /> : <BurgerMenu />
            }
            <div className="header-component">
                <div className="header-component__form">
                    <h1 className="header-component__form_h1">
                        Cпециализированные решения для перевозки груза, требующего соблюдения температурного режима
                    </h1>
                    <p  className="header-component__form_p">
                        Рассчитайте стоимость грузоперевозки
                    </p>
                    <Form />
                </div>
            </div>
        </header>
    );
};

export default React.memo(Header);