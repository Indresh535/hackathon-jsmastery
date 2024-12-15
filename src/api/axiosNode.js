import Axios from 'axios';
import { CURRENT_NodeJs_BACKEND_SERVER } from './Backend_Url';

const BASE_URL = CURRENT_NodeJs_BACKEND_SERVER

export const axiosNode = Axios.create({ 
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },             
    withCredentials: true   
});

