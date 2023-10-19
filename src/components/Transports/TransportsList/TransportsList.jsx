import React, {useEffect, useState} from 'react';
import Transport from "../Transport/Transport";
import {GetTransports} from "../../../api/getTransportsData";
import axios from "axios";
import {backendHost} from "../../../const";
import {getMakes} from "../../../api/getMakesData";

const TransportsList = ({handleShow}) => {

    // useEffect(() => {
    //     async function fetchTransport(category=1) {
    //         const { data } = await axios.get(`${backendHost}/api/goods.transport.list?transport_make_id=${category}`);
    //         return data;
    //     }
    //     let datas = fetchTransport(category);
    //     setTransport(datas.then(res => console.log(res.data)))
    // }, [category]);

    // console.log(data.data)
    const [ transports, setTransport ] = useState([]);

    useEffect(() => {
        GetTransports().then(data => setTransport(data));
    }, []);

    return (
        <div>
            {
                transports.map(transport =>
                    <Transport className="swiper-slide"
                               key={transport.title}
                               title={transport.title}
                               load_capacity={transport.load_capacity}
                               description={transport.description}
                               height={transport.height}
                               capacity={transport.capacity}
                               transport_body={transport.transport_body}
                               load_side={transport.load_side}
                               length={transport.length}
                               volume={transport.volume}
                               width={transport.width}
                               handleShow={handleShow}
                    />)
            }
        </div>
    );
};

export default TransportsList;