import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Team.sass';

import {getTeam} from "../../api/geTeamData";
import Member from "./Member/Member";

const Team = () => {

    const [ members, setMembers ] = useState([]);

    useEffect(() => {
        getTeam().then(data => setMembers(data));
    }, []);

    return (
        <div id="team">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 80,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="teamSwiper"
            >

                    {
                        members.map(member =>
                            <SwiperSlide key={member.first_name}><Member first_name={ member.first_name }
                              responsibilities={ member.responsibilities }
                              icon={ member.icon }
                              middle_name={ member.middle_name }
                              last_name={ member.last_name }
                              position={ member.position } /></SwiperSlide>)
                    }

            </Swiper>
        </div>
    );
};

export default Team;