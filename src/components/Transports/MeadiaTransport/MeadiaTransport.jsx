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
                    <SwiperSlide>
                        <ImagesTransport
                            title={ media.title }
                            icon={ media.icon }
                            key={ media.id } />
                    </SwiperSlide>)
            }
        </Swiper>
    );
};

export default MeadiaTransport;