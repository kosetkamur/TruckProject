import React  from 'react';
import Agreement from "./Agreement/Agreement";



const Submit = ({ response }) => {
    let okResponse;
    if(response.status === 200){
        okResponse = <p style={{color:'green'}}>Ваша заявка успешно отправлена</p>
    }
    return (
        <div className="form-submit">
            <Agreement />
            <input type='submit' name='submit' value="Отправить заявку"/>
            {okResponse}
        </div>
    );
};

export default Submit;