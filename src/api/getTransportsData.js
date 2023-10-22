import axios from 'axios';
import {backendHost} from "../const";

export const GetTransports = async () => {
    try{
        let getData = await axios.get(`${backendHost}/api/goods.transport?transport_make_id=1`);
        return getData.data.data;
    }
    catch (e){
        console.log(e)
    }
}