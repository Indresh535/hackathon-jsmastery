import Axios from 'axios';
import CryptoJS from 'crypto-js';
import { useRouter } from 'next/navigation'
import { CURRENT_Asp_API_BACKEND_SERVER } from './Backend_Url';

const BASE_URL = CURRENT_Asp_API_BACKEND_SERVER;

export const axios = Axios.create({ 
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },             
    withCredentials: true   
});

let refresh = false;

axios.interceptors.response.use(
  (response) => 
  (response),
  // {
  //   console.log('Response Interceptor Successfull', response);
  //   return response;
  // },
  async (error) => {
    const encryptedAccessData = sessionStorage.getItem("Secure_Token");
    const decryptAccessData = JSON.parse(CryptoJS.AES.decrypt(encryptedAccessData, process.env.NEXT_PUBLIC_SESSION_SECRET_KEY).toString(CryptoJS.enc.Utf8));
    
    const jwtModel = {
      Access_Token: decryptAccessData, 
      //Refresh_Token:"Wa2Nj%2Bl70JhdRfPx9Iqd2dwjP8%2F%2FkuLQOxKLwBJgUvw%3D", 
     };
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      try {
        const response = await axios.post('/refresh' ,jwtModel,{withCredentials: true });

        if (response.status === 200) {
          // Update the Authorization header with the new access token
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
          //console.log('Access', response.data);

          // Retry the original request with the new access token
          return axios(error.config);
        }
      } catch (refreshError) {
        //console.error('Token refresh failed:', refreshError);
        const router = useRouter()
        router.push('/')
      } 
    }

    return Promise.reject(error);
  }
);
