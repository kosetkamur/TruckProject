import React, {useState} from 'react';
import axios from 'axios';

import './Form.sass'
import Submit from "./Submit/Submit";
import PhoneMask from "../PhoneMask/Phone";
import Load from "../Load/Load";
import {initialState} from "../../const";

const Form = ({idTranport}) => {
    const [ data, setData ] = useState(initialState);
    const [ response, setResponse ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);



    const handleSubmit = event => {
        event.preventDefault();

        setIsLoading(true);

        let formdata = new FormData();
        formdata.append('name', data.name);
        formdata.append('contact_phone', data.contact_phone);
        formdata.append('departure', data.departure);
        formdata.append('arrival', data.arrival);
        formdata.append('weight', data.weight);
        formdata.append('description', data.description);
        if(idTranport) formdata.append('transport', idTranport);


        axios({
            method: "post",
            url: "http://pm2023cl.beget.tech/api/bids.price.create",
            data: formdata,
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                setIsLoading(false);
                setResponse(res);
            }, res => {
                setIsLoading(false);
                setResponse(res);
            })

        setData({
            "name": "",
            "contact_phone": "",
            "departure": "",
            "arrival": "",
            "weight": "",
            "description": "",
            "transport": ""
        })
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setData({...data, [name]: value})
    }

    let phoneError = "";
    let res = response.response;
    if(res!==undefined && res.status === 400){
        let field = res.data.field_problems;
        if(field.contact_phone){
            phoneError = field.contact_phone
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className="form-items">
                    <div className="form-items__item item1">
                        <input type='text'
                               name='departure'
                               placeholder='Откуда везти'
                               className="form-input"
                               value={ data.departure || "" }
                               onChange={ handleInputChange }
                               required/>
                    </div>
                    <div className="form-items__item item2">
                        <input type='text'
                               name='description'
                               placeholder='Описание груза'
                               className="form-input"
                               value={ data.description || "" }
                               onChange={ handleInputChange }
                               required/>
                    </div>
                    <div className="form-items__item item3">
                        <input type='text'
                               name='name'
                               placeholder='Ваше имя'
                               className="form-input"
                               value={ data.name || "" }
                               onChange={ handleInputChange }
                               required/>
                    </div>
                    <div className="form-items__item item4">
                        <input type='text'
                               name='arrival'
                               placeholder='Куда везти'
                               className="form-input"
                               value={ data.arrival || "" }
                               onChange={ handleInputChange }
                               required/>
                    </div>
                    <div className="form-items__item item5">
                        <input type='text'
                               name='weight'
                               placeholder='Вес груза'
                               className="form-input"
                               value={ data.weight || "" }
                               onChange={ handleInputChange }
                               required/>
                    </div>
                    <div className="form-items__item item6">
                        <PhoneMask name='contact_phone'
                                   value={data.contact_phone }
                                   onChange={ handleInputChange }>
                        </PhoneMask>
                        <p style={{color:'red',fontSize: '12px'}}>{ phoneError }</p>
                    </div>
                </div>
                <Submit response={ response } />
            </form>
            { isLoading && <Load isLoading={ isLoading }/> }
        </>
    );
};

export default React.memo(Form);