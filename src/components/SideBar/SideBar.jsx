import React from 'react';

import './SideBar.sass'

const SideBar = ({ closeSideBar }) => {

    const handleButtonClose = () => {
        closeSideBar()
    }

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="nav__item close" onClick={ handleButtonClose }>
                </div>
                <div className="nav__item" onClick={ handleButtonClose }>
                    <a href="#transport" className="collaborationRef">Транспорт</a>
                </div>
                <div className="nav__item" onClick={ handleButtonClose }>
                    <a href="#team" className="catalogRef">Руководство</a>
                </div>
                <div className="nav__item" onClick={ handleButtonClose }>
                    <a href="#contacts" className="contactsRef">Контакты</a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;