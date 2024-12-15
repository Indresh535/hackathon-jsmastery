"use client"
import {React, useState, useEffect} from 'react';
import { Grid, Container, TextField, Alert, AlertTitle } from '@mui/material';
import Image from 'next/image';
import { axios } from '@/api/axiosInstance';
import { axiosNode } from '@/api/axiosNode';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
//import { useJwtStateContext } from '@/context/JwtAuthContextProvider';
import CryptoJS from 'crypto-js';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';
import { useStateContext } from '@/context/ContextProvider'
import { CURRENT_NodeJs_BACKEND_SERVER } from '@/api/Backend_Url';

const Login = () => {
    //const { setJwtAuth } = useJwtStateContext();
    const {setIsLoggedIn} = useStateContext()

    const router = useRouter()
    const intialValues = {
        EmailAddress: '',
        Password: '',
    }


    const [loginData, setLoginData] = useState(intialValues)
    const [loadingButton, setLoadingButton] = useState(false)

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setLoginData({...loginData, [name]:value})
    }
    

    const GuestLogin = () => {
        setIsLoggedIn(true)
    }


    const googleAuth = () => {
        window.open(CURRENT_NodeJs_BACKEND_SERVER+"/auth/google", "_self");
        // axiosNode.post('/auth/google').then((res) => {
        //     console.log(res)
        // }).catch((error) => {            
        //     console.log(error)
        //     })
        } 

     const gitHubAuth = () => {
        window.open(CURRENT_NodeJs_BACKEND_SERVER+"/auth/github", "_self");
        // axiosNode.post('/auth/github').then((res) => {
        //     console.log(res)
        // }).catch((error) => {            
        //     console.log(error)
        //     })
        }

        // useEffect(() => {
        //     const getUser = () => {
        //       fetch("http://localhost:5000/auth/login/success", {
        //         method: "GET",
        //         credentials: "include",
        //         headers: {
        //           Accept: "application/json",
        //           "Content-Type": "application/json",
        //           "Access-Control-Allow-Credentials": true,
        //         },
        //       })
        //         .then((response) => {
        //           if (response.status === 200) return response.json();
        //           throw new Error("authentication has been failed!");
        //         })
        //         .then((resObject) => {
        //           setUser(resObject.user);
        //         })
        //         .catch((err) => {
        //           console.log(err);
        //         });
        //     };
        //     getUser();
        //   }, []);

    const handleSubmitLogin =  async (e) => {
        e.preventDefault();

        try {            
            await axios.post('/login', loginData)
            .then((response) => {
                setLoadingButton(true)
                console.log('Login succcess', response.data);
                //setJwtAuth(response.data)
                if (response.status === 200) {
                    // Handle the response data here
                    const encryptedAccessToken = CryptoJS.AES.encrypt(JSON.stringify(response.data), process.env.NEXT_PUBLIC_SESSION_SECRET_KEY).toString();
                    sessionStorage.setItem('Secure_Token', encryptedAccessToken)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
                    router.push('/Dashboard')
                    toast.success('Login Successful')
                }             
                setLoadingButton(false)
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Server Error:', error);
                if(error.data === 'Invalid credentials'){
                    toast.error('Invalid credentials')
                }else{
                    //console.error('Server Error:', error);
                    toast.error('Server Error')
                }
            });

                
            // const response = await fetch('https://localhost:44372/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(loginData),
            // });

            // if (response.status === 200) {
            //     toast.success('login Successfully')
            //     console.error('login Successfully', response);
            // } else if (response.status === 400) {
            //     toast.error('Invalid failed')
            //     console.error('Invalid crd failed', response);
            // }
        } catch (error) {
            console.error('Not found Error:', error);
        }
        
    }
  return (
    <div>
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/*<a href="#" className="flex items-center my-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image className="w-8 h-8 mr-2" src='/images/avatar/myLogo.png' alt="logo" height={32} width={32}/>    
                LogIn    
  </a>*/}
        <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Log In to your account &nbsp;<Link href='/Dashboard' className='text-sm text-blue-600 underline' onClick={GuestLogin}>Login as Guest</Link>
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitLogin}>
                    <div>
                        <TextField
                        fullWidth
                        required
                        label="Username"
                        variant="outlined"
                        name='EmailAddress'
                        onChange={handleInputChange}
                        />
                    </div>              
                    <div>
                        <TextField
                            fullWidth
                            className='dark:text-white'
                            required
                            label="Password"
                            type="password"
                            autoComplete="current-password"                           
                            variant="outlined"
                            name='Password'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-blue-800 hover:underline dark:text-white">Forgot password?</a>
                    </div>                    
                            <LoadingButton
                            loading={loadingButton}
                            variant="outlined"
                            type="submit" 
                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:cursor-pointer hover:bg-blue-400" 
                            >
                            Log In
                            </LoadingButton>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-white">Register Here</a>
                    </p>
                    <div>
                        <button onClick={gitHubAuth}  type="button" className="w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-bold rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            <img src='/images/avatar/github-white.png' alt='github' className="w-6 h-6 mr-2"/>
                                            Log In with Github
                        </button>
                    </div>
                    <div>
                        {/*<button type="button" className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                        </svg>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' className="w-4 h-4 mr-2"/>
                        Log In with Google
                        </button>*/}
                        <button onClick={googleAuth} type="button" className="w-full bg-white border-2 focus:ring-4 focus:ring-[#f7f7f7]/50 font-bold rounded-sm text-md px-5 py-2.5 text-center hover:text-blue-500 inline-flex items-center justify-center dark:focus:ring-[#f7f7f7]/55 mr-2 mb-2 hover:bg-slate-300">
                        <img src='/images/avatar/google.png' alt='google' className="w-6 h-6 mr-2"/>
                            Log In with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
    </div>
  )
}

export default Login
