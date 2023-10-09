import React from 'react';
import "./Transports.sass";
import Transport from "./Transport/Transport";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Title from "../Title/Title";

const Transports = ({ handleShow }) => {

    let transports = [{
        title: "Автопоезд с рефрижераторным прицепом",
        transport_body: "рефрижиратор",
        length: 1.5,
        width: 3.3,
        height: 10.5,
        volume: 86,
        load_capacity: "20 тонн",
        load_side: "задняя",
        capacity: 33,
        help_text: "Так же можно будет осуществлять перевозку как изотермический прицеп",
    },{
        title: "Автопоезд с рефрижераторным прицепом",
        transport_body: "рефрижиратор",
        length: 1.5,
        width: 3.3,
        height: 10.5,
        volume: 86,
        load_capacity: "20 тонн",
        load_side: "задняя",
        capacity: 33,
        help_text: "Так же можно будет осуществлять перевозку как изотермический прицеп",
    }]

    return (
        <>
            <Title title={"Транспорт"} />
            <div className="transports-component" id="transport">
                <p className="transports-component__subtitle">
                    Все машины – это <strong style={{color: "#488ACD"}}>новый</strong> автопарк.
                </p>
                <p className="transports-component__subtitle">
                    Среди них основными являются машины 2023 года SITRAK и FAW
                </p>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        transports.map(transport =>
                            <SwiperSlide><Transport className="swiper-slide"
                                       title={ transport.title }
                                       length={ transport.length }
                                       width={ transport.width }
                                       height={ transport.height }
                                       volume={ transport.volume }
                                       load_capacity={ transport.load_capacity }
                                       load_side={ transport.load_side }
                                       capacity={ transport.capacity }
                                       transport_body={ transport.transport_body }
                                       help_text={ transport.help_text }
                                       handleShow={ handleShow }
                            /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Transports;