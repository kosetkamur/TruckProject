import axios from 'axios';
import {backendHost} from "../const";

export const getMakes = async () => {
    try{
        let getData = await axios.get(`${backendHost}/api/goods.transport.make.list`);
        return getData.data.data;
    }
    catch (e){
        console.log(e)
    }
}