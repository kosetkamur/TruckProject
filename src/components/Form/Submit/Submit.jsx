import React  from 'react';
import Agreement from "./Agreement/Agreement";



const Submit = ({ response }) => {
    let okResponse;
    if(response.status === 200){
        okResponse = <p style={{color:'green'}}>Ваша заявка успешно отправлена</p>
    }
    return (
        <div className="form-submit">
            <input type='submit' name='submit' value="Отправить заявку"/>
            {okResponse}
            <Agreement />
        </div>
    );
};

export default Submit;