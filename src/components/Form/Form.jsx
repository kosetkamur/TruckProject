import React, {useState} from 'react';
import axios from 'axios';

import './Form.sass'
import clip from '../../media/img/clip.svg'
import Submit from "./Submit/Submit";
import PhoneMask from "../PhoneMask/Phone";
import Load from "../Load/Load";
import {initialState} from "../../const";

const Form = () => {
    const fileInput = React.createRef();

    const [ file, setFile ] = useState('Прикрепите файл в формате PDF');
    const [ data, setData ] = useState(initialState);
    const [ response, setResponse ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);


    const handleSubmit = event => {
        event.preventDefault();

        setIsLoading(true);

        let formdata = new FormData();
        formdata.append('full_name', data.full_name);
        formdata.append('contact_phone', data.contact_phone);
        formdata.append('email', data.email);
        formdata.append('company_name', data.company_name);
        formdata.append('comment', data.comment);
        formdata.append('document', fileInput.current.files[0]);

        axios({
            method: "post",
            url: "https://ooomlk.ru/api/bids.cooperation.create",
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

        setFile('Прикрепите файл в формате PDF');
        setData({ full_name: "",
            contact_phone: "",
            email: "",
            company_name: "",
            comment: ""})
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setData({...data, [name]: value})
    }

    let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
        input.addEventListener('change', function () {
            if (this.files)
                setFile(`Файл выбран`)
        });
    });

    let emailError = "";
    let phoneError = "";
    let res = response.response;
    if(res!==undefined && res.status === 400){
        let field = res.data.field_problems;
        if(field.email) emailError = field.email
        if(field.contact_phone){
            phoneError = field.contact_phone
        }
    }

    return (
        <>
        <div className="form-cooperation" id="form">
            <div className="form">
                <div className="form-container">
                    <div className="title">
                        <h3>
                            оставьте заявку на
                        </h3>
                        <h2>
                            Сотрудничество
                        </h2>
                    </div>

                    <form onSubmit={ handleSubmit }>
                        <div className="form-items">
                            <div className="form-items__item item1">
                                <label htmlFor='full_name'>Ваше имя*</label>
                                <input type='text'
                                       name='full_name'
                                       placeholder='Имя'
                                       className="form-input"
                                       value={ data.full_name || "" }
                                       onChange={ handleInputChange }
                                       required/>
                            </div>
                            <div className="form-items__item item2">
                                <label htmlFor='contact_phone'>Ваш телефон*</label>
                                <PhoneMask name='contact_phone'
                                           value={data.contact_phone }
                                           onChange={ handleInputChange }>
                                </PhoneMask>
                                <p style={{color:'red',fontSize: '12px'}}>{ phoneError }</p>
                            </div>
                            <div className="form-items__item item3">
                                <label htmlFor='email'>Ваша почта*</label>
                                <input type='email'
                                       name='email'
                                       placeholder='Email'
                                       className="form-input"
                                       value={ data.email || "" }
                                       onChange={ handleInputChange }
                                       required/>
                                <p style={{color:'red',fontSize: '12px'}}>{ emailError }</p>
                            </div>
                            <div className="form-items__item item4">
                                <label htmlFor='company_name'>Наименование компании*</label>
                                <input type='text'
                                       name='company_name'
                                       placeholder='Компания'
                                       className="form-input"
                                       value={ data.company_name || "" }
                                       onChange={ handleInputChange }
                                       required/>
                            </div>
                            <div className="form-items__item item5">
                                <label htmlFor='file'>Прикрепите файл*</label>
                                <input name="file"
                                       type="file"
                                       id="field__file-2"
                                       className="field field__file"
                                       accept="application/pdf"
                                       ref={ fileInput } />

                                <label className="field__file-wrapper" htmlFor="field__file-2">
                                    <div className="field__file-fake">{ file }</div>
                                    <div className="field__file-button"><img src={ clip } alt="скрепка" /></div>
                                </label>
                            </div>
                            <div className="form-items__item item6">
                                <label htmlFor='comment'>Ваш комментарий*</label>
                                <input type='text'
                                       name='comment'
                                       placeholder='Ваш комментарий'
                                       className="form-input"
                                       value={ data.comment || "" }
                                       onChange={ handleInputChange }
                                       required/>
                            </div>
                        </div>
                        <Submit response={ response } />
                    </form>
                </div>
            </div>
        </div>
        { isLoading && <Load isLoading={ isLoading }/> }
    </>
    );
};

export default React.memo(Form);