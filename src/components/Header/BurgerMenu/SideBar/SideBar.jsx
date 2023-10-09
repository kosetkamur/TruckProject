import React from 'react';

import './SideBar.sass'
import close from '../../../../media/img/close_white.svg'

const SideBar = ({ closeSideBar }) => {

    const handleButtonClose = () => {
        closeSideBar()
    }

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="nav__item close" onClick={ handleButtonClose }>
                    <img src={ close } alt="Кнопка закрыть" />
                </div>
                <div className="nav__item">
                    <a href="#collaboration" className="collaborationRef">Сотрудничество</a>
                </div>
                <div className="nav__item">
                    <a href="#catalog" className="catalogRef">Каталог</a>
                </div>
                <div className="nav__item">
                    <a href="#news" className="newsRef">Новости</a>
                </div>
                <div className="nav__item">
                    <a href="#contacts" className="contactsRef">Контакты</a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;