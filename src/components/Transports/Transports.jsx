import React, { useEffect, useState } from 'react';

import "./Transports.sass";
import MeadiaTransport from "./MeadiaTransport/MeadiaTransport";
import {getMakes} from "../../api/getMakesData";
import TransportsList from "./TransportsList/TransportsList";
import {backendHost} from "../../const";
import axios from "axios";
import {useQuery} from "react-query";
import {GetTransports} from "../../api/getTransportsData";


const Transports = ({ handleShow }) => {

    const [ categories, setCategories ] = useState([]);
    // const [ cat, setCat ] = useState(1);
    const [ transports, setTransport ] = useState([]);

    useEffect(() => {
        GetTransports().then(data => setTransport(data));
        getMakes().then(data => setCategories(data));
    }, []);

    // async function fetchTransport(id = 1) {
    //     const data = await axios.get(`${backendHost}/api/goods.transport.list?transport_make_id=${id}`);
    //     return data.data;
    // }

    // const { data } = useQuery(
    //     ["transport_make_id", cat],
    //     () => fetchTransport(cat),
    //     { keepPreviousData: true });
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
                    <div className="transports-component__container_images">
                        {
                            transports.map(transport => <MeadiaTransport media={ transport.media }/>)
                        }
                    </div>
                    <div className="transports-component__container_transports">
                        {/*<div className="transports-component__container_transports__buttons">*/}
                        {/*    {*/}
                        {/*        categories.map(category =>*/}
                        {/*            <div key={category.id} className="transports-component__container_transports__buttons_button">*/}
                        {/*                <button onClick={ () => setCat(category.id) }>{ category.title }</button>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>
                    <TransportsList handleShow={handleShow}/>
                </div>
            </div>
        </>
    );
};

export default Transports;