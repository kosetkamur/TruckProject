import React, {useEffect, useState} from 'react';
import GetAgreement from "../../../../api/getAgreement";

const Agreement = () => {

    const [ file, setFile ] = useState();

    let agreementFile;

    useEffect(() => {
        GetAgreement.GetFile().then(resp => {
            setFile(resp);
        });
    }, []);

    if(typeof file === 'object') {
        agreementFile = 'https://ooomlk.ru' + file.file
    }

    return (
        <a href={ agreementFile } download className='agree'>Нажимая кнопку отправки, вы даете согласие на обработку своих персональных данных</a>
    );
};

export default Agreement;