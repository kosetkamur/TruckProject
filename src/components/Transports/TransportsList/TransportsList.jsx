import React from 'react';
import {useQuery} from "react-query";

import axios from "axios";

import "./TransportList.sass";

import {backendHost} from "../../../const";
import Transport from "../Transport/Transport";
import MeadiaTransport from "../MeadiaTransport/MeadiaTransport";

const TransportsList = ({handleShow, cat}) => {
    async function fetchTransport(cat = 1) {
        const response = await axios.get(`${backendHost}/api/goods.transport?transport_make_id=${cat}`);
        return response.data;
    }

    const { isLoading, error, data } = useQuery(
        ["transport_make_id", cat],
        () => fetchTransport(cat),
        { keepPreviousData: true });


    if (isLoading) return <p>Загрузка...</p>;

    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div className="transport-list-component">
            <div className="transport-list-component__container">
                <MeadiaTransport media={ data.data[0].media }/>
                <Transport className="swiper-slide"
                   key={data.data[0].title}
                   title={data.data[0].title}
                   load_capacity={data.data[0].load_capacity}
                   description={data.data[0].description}
                   height={data.data[0].height}
                   capacity={data.data[0].capacity}
                   transport_body={data.data[0].transport_body}
                   load_side={data.data[0].load_side}
                   length={data.data[0].length}
                   volume={data.data[0].volume}
                   width={data.data[0].width}
                   cat={ cat }
                   handleShow={handleShow} />
            </div>
        </div>
    );
};

export default TransportsList;