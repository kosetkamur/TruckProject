import React, {useEffect} from 'react';

import './Load.sass'

const Load = ({ isLoading }) => {

    useEffect(() => {
        let body = document.querySelector('body');
        if(isLoading){
            body.className = 'no-scroll'
        } else {
            body.classList.remove('no-scroll');
        }
    }, [ isLoading ])

    return (
        <div className="load-wrapper">
            <div className="load-popup">
                <div className="load-popup__text">
                    Загрузка...
                </div>
            </div>
        </div>
    );
};

export default Load;