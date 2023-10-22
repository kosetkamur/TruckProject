import React from 'react';

import { backendHost } from "../../../../const";

const ImagesTransport = ({ icon, title }) => {
    console.log(icon)
    return (
        <img src={ `${backendHost}${icon}` } alt={ title } className="images-transport" />
    );
};

export default ImagesTransport;