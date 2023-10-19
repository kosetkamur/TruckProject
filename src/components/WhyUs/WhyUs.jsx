import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import PlashWhyUs from "./PlashWhyUs/PlashWhyUs";
import "./WhyUs.sass";
import {GetWhyUs} from "../../api/getWhyUsData";

const WhyUs = () => {

    const [ cooperation, setCooperation ] = useState([]);

    useEffect(() => {
        console.log()
        GetWhyUs().then(data => {
            setCooperation(data);
        });
    }, []);

    return (
        <div className="why-us-component">
            <div className="why-us-component__container">
                <Swiper
                    slidesPerView={'auto'}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        cooperation.map((data) =>
                            <SwiperSlide>
                                <PlashWhyUs className="swiper-slide"
                                                    description={ data.description }
                                                    icon={ data.icon }
                                                    card_color={ data.card_color }
                                                    key={ data.icon } />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default WhyUs;