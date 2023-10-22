import React from 'react';
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import "./MeadiaTransport.sass";
import ImagesTransport from "./ImagesTransport/ImagesTransport";

const MeadiaTransport = ({ media }) => {
    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mediaSwiper"
        >
            {
                media.map(media =>
                    <SwiperSlide key={ media.id }>
                        <ImagesTransport
                            title={ media.title }
                            icon={ media.icon } />
                    </SwiperSlide>)
            }
        </Swiper>
    );
};

export default MeadiaTransport;