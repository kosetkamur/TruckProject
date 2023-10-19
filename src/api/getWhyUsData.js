import axios from 'axios';
import {backendHost} from "../const";

export const GetWhyUs = async () => {
    try{
        let getData = await axios.get(`${backendHost}/api/cooperation.benefits.list`);
        return getData.data.data;
    }
    catch (e){
        console.log(e)
    }
}