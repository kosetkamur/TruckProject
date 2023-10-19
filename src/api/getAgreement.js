import axios from 'axios';
import {backendHost} from "../const";

export const GetAgreement = async () => {
    try{
        let getData = await axios.get(`${backendHost}/api/core.agreement`);
        return getData.data.data;
    }
    catch (e){
        console.log(e)
    }
}