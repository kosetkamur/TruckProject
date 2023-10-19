import React from 'react';
import '../Member/Member.sass';

import {backendHost} from "../../../const";

const Member = ({first_name, responsibilities, icon, middle_name, last_name, position}) => {
    return (
        <div className="member-component">
            <div className="member-component__container">
                <img src={ `${backendHost}${icon}` } className="member-component__container_img"/>
                <div className="member-component__container_tooltip">
                    <p className="member-component__container_tooltip__text">
                        { responsibilities }
                    </p>
                </div>
                <p className="member-component__container_last-name">
                    { last_name }
                </p>
                <p className="member-component__container_name">
                    { first_name } { middle_name }
                </p>
                <p className="member-component__container_position">
                    { position }
                </p>

            </div>
        </div>
    );
};

export default Member;