import React from 'react';
import logo from "../../../media/img/logo1.svg";

const PlashWhyUs = ({data}) => {
    return (
        <div className="plash">
            <div className="plash__img">
                {/*<img src={ 'https://ooomlk.ru'+catalog.icon } alt="иконка категории" />*/}
                <img src={ logo } alt="иконка" />
            </div>
            <div className="plash__title">{data.title}</div>
        </div>
    );
};

export default PlashWhyUs;