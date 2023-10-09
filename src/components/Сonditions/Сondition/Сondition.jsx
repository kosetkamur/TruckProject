import React from 'react';

const Сondition = ({data, num}) => {
    return (
        <div className="condition">
            <div className="condition__num">0{num+1}</div>
            <div className="condition__title">{data.title}</div>
            <div className="condition__subtitle">{data.subtitle}</div>
        </div>
    );
};

export default Сondition;