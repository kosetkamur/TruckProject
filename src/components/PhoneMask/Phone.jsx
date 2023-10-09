import React from 'react';
import InputMask from "react-input-mask";

const Phone = (props) => {
    return (
        <InputMask id={ props.id }
                   name={ props.name }
                   mask='+7(999)999-99-99'
                   value={ props.value }
                   onChange={ props.onChange }>
            {(inputProps) => <input type="tel" name='contact_phone' {...inputProps} placeholder='+7 (   ) __-__-__ ' required className="form-input"/>}
        </InputMask>
    );
};

export default Phone;