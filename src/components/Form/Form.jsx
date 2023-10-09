import React, {useState} from 'react';
import axios from 'axios';

import './Form.sass'
import Submit from "./Submit/Submit";
import PhoneMask from "../PhoneMask/Phone";
import Load from "../Load/Load";
import {initialState} from "../../const";

const Form = () => {
    const [ data, setData ] = useState(initialState);
    const [ response, setResponse ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        setIsLoading(true);

        let formdata = new FormData();
        formdata.append('departure', data.departure);
        formdata.append('description', data.description);
        formdata.append('full_name', data.full_name);
        formdata.append('destination', data.destination);
        formdata.append('weight', data.weight);
        formdata.append('contact_phone', data.contact_phone);

        axios({
            method: "post",
            url: "",
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                setIsLoading(false);
                setResponse(res);
            }, res => {
                setIsLoading(false);
                setResponse(res);
            })

        setData({
            departure: "",
            description: "",
            full_name: "",
            destination: "",
            weight: "",
            contact_phone: ""
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
                               name='full_name'
                               placeholder='Ваше имя'
                               className="form-input"
                               value={ data.full_name || "" }
                               onChange={ handleInputChange }
                               required/>
                    </div>
                    <div className="form-items__item item4">
                        <input type='text'
                               name='destination'
                               placeholder='Куда везти'
                               className="form-input"
                               value={ data.destination || "" }
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