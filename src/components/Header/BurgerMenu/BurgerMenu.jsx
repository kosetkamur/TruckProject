import React, {useState} from 'react';

import './Burger.sass'
import menu from '../../../media/img/menu.svg'
import SideBar from "./SideBar/SideBar";
import logo from "../../../media/img/logo.svg";

const BurgerMenu = () => {

    const [ hide, setHide ] = useState(false);

    return (
        <div className="burger-menu-container">
            <div className="burger-menu-container__logo">
                <a href="#">
                    <img src={logo} alt="Логотип ООО ПТК"/>
                </a>
            </div>
            {
                (hide) ? <SideBar closeSideBar={ () => setHide(false) } /> :
                    <div><button className="burger-menu" onClick={ () => setHide(true) }>
                        <img src={ menu } alt="меню"/>
                    </button></div>
            }

        </div>
    );
};

export default BurgerMenu;