import React, { useEffect, useState } from 'react';

import "./Transports.sass";
import {getMakes} from "../../api/getMakesData";
import TransportsList from "./TransportsList/TransportsList";


const Transports = ({ handleShow }) => {

    const [ categories, setCategories ] = useState([]);
    const [ cat, setCat ] = useState(1);
    const [ activeButton, setActiveButton ] = useState(1);

    useEffect(() => {
        getMakes().then(data => setCategories(data));
    }, []);

    return (
        <>
            <div className="transports-component" id="transport">
                <div className="transports-component__text">
                    <p className="transports-component__text_subtitle">
                        Все машины – это <strong style={{color: "#488ACD"}}>новый</strong> автопарк.
                    </p>
                    <p className="transports-component__text_subtitle">
                        Среди них основными являются машины 2023 года <strong style={{color: "#488ACD"}}>SITRAK</strong> и <strong style={{color: "#488ACD"}}>FAW</strong>
                    </p>
                </div>
                <div className="transports-component__container">
                    <div className="transports-component__container_transports">
                        <div className="transports-component__container_transports__pole"></div>
                        <div className="transports-component__container_transports__buttons">
                            {
                                categories.map(category =>
                                    <div key={category.id} onClick={() => setActiveButton(category.id)} className={`transports-component__container_transports__buttons_button ${category.id === activeButton? 'active' : ''}`}>
                                        <button onClick={ () => setCat(category.id) }>{ category.title }</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <TransportsList handleShow={handleShow} cat={cat}/>
                </div>
            </div>
        </>
    );
};

export default Transports;