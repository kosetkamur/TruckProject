import React from 'react';

import './Burger.sass'
import menu from '../../../media/img/menu.svg'
import logo from "../../../media/img/logo.svg";

const BurgerMenu = ({ openBurgerMenu }) => {

    const openMenu = () => {
        openBurgerMenu();
    }

    return (
        <div className="burger-menu-container">
            <div className="burger-menu-container__logo">
                <a href="#">
                    <img src={logo} alt="Логотип ООО ПТК"/>
                </a>
            </div>
            <button className="burger-menu" onClick={ openMenu }>
                <img src={ menu } alt="меню"/>
            </button>
        </div>
    );
};

export default BurgerMenu;