import React, {useEffect, useState} from 'react';
import {GetAgreement} from "../../../../api/getAgreement";
import {backendHost} from "../../../../const";

const Agreement = () => {

    const [ file, setFile ] = useState();

    let agreementFile;

    useEffect(() => {
        GetAgreement().then(resp => {
            setFile(resp);
        });
    }, []);

    if(typeof file === 'object') {
        agreementFile = backendHost + file.file
    }

    return (
        <div className='agree'>
            Нажимая на кнопку, Вы даете согласие на&nbsp;
            <a href={ agreementFile } download>
                обработку своих персональных данных
            </a>
        </div>
    );
};

export default Agreement;