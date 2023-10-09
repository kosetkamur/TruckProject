import React from 'react';
import "./Title.sass";

const Title = ({title}) => {
    return (
        <div className="title-component">
            {title}
        </div>
    );
};

export default Title;