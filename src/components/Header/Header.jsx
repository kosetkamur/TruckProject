import React from 'react';

import './Header.sass'
import Navigation from "./Navigation/Navigation";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {

    return (
        <header>
            <nav className="nav">
                {
                    (window.innerWidth > 800) ?  <Navigation /> : <BurgerMenu />
                }
            </nav>
            <div className="container">
                <section className="header-components">
                    <div className="header-components__description">
                        <h1>
                            Официальный дистрибьютер
                            крупнейших российских производителей
                        </h1>
                        <p>
                            Продуктов питания и непродовольственных товаров
                        </p>
                    </div>
                    <div>
                        <a href="#form">
                            Стать партнёрами
                        </a>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default React.memo(Header);