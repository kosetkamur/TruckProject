import axios from 'axios';
import {backendHost} from "../const";

export const getTeam = async () => {
    try{
        let getData = await axios.get(`${backendHost}/api/cooperation.team.list`);
        return getData.data.data;
    }
    catch (e){
        console.log(e)
    }
}

