import axios from 'axios';
import {backendHost} from "../const";

export const getContancts = async () => {
    try{
        let getData = await axios.get(`${backendHost}/api/core.contacts`);
        return getData.data.data;
    }
    catch (e){
        console.log(e)
    }
}


