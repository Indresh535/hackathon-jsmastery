"use client"
import {React, useState} from 'react'
import { Grid, Container, TextField, Alert, AlertTitle } from '@mui/material';
import Image from 'next/image';
import { axios } from '@/api/axiosInstance';
import { toast } from "react-toastify";

const Register = () => {

    const intialValues = {
        FirstName: '',
        LastName: '',
        EmailAddress: '',
        Password: '',
        confirmPassword: '',
    }

    const [registerData, setRegisterData] = useState(intialValues)

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setRegisterData({...registerData, [name]:value})
    }

    const handleSubmitRegister =  async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:44372/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });

            if (response.ok) {
                console.log(response, 'Registration success')
                toast.success('Registration success')
            } else {
                console.error(response, 'Registration failed')
                toast.success('Registration failed')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <div>
    <section className="bg-gray-50 dark:bg-gray-900">
        <Container maxWidth="sm" className='flex flex-grow justify-center items-center my-4'>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">                
                <div className="w-full bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6">
                        <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            <a href="#" className="text-2xl font-semibold text-gray-900 dark:text-white p-2">
                                <span className='flex flex-1 flex-row justify-center'>
                                    <Image className="w-8 h-8 mr-2" src='/images/avatar/myLogo.png' alt="logo" height={32} width={32}/>    
                                </span> 
                                <span className='mb-2'>
                                    Create to your account
                                </span>  
                            </a>                        
                        </h1>
                        <form className="mt-2 space-y-4 md:space-y-6" onSubmit={handleSubmitRegister}>                  
                            <Grid container spacing={2}> 
                                <Grid item lg={6} md={6} xs={12}>
                                    <button type="button" className="w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                                        </svg>
                                            Sign in with Github
                                    </button>
                                </Grid>  
                                <Grid item lg={6} md={6} xs={12}>
                                    <button type="button" className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                    {/*} <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                                    </svg>*/}
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' className="w-4 h-4 mr-2"/>
                                        Sign in with Google
                                    </button>
                                </Grid>
                                <Grid item xs={12}>                        
                                    <div className="mt-2 grid grid-cols-3 items-center text-gray-500">
                                        <hr className="border-gray-500" />
                                            <p className="text-center text-sm">OR</p>
                                        <hr className="border-gray-500" />
                                    </div> 
                                </Grid>  
                                <Grid item lg={6} md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="First Name"
                                        type='text'
                                        variant="outlined"
                                        name='FirstName'
                                        onChange={handleInputChange}
                                        />
                                </Grid>  
                                <Grid item lg={6} md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="Last Name"
                                        type='text'
                                        variant="outlined"
                                        name='LastName'
                                        onChange={handleInputChange}
                                        />
                                </Grid>   
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="E-mail"
                                        type='email'
                                        variant="outlined"
                                        name='EmailAddress'
                                        onChange={handleInputChange}
                                    />
                                </Grid>  
                                <Grid item lg={6} md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        className='dark:text-white'
                                        required
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"                           
                                        variant="outlined"
                                        name="Password"
                                        onChange={handleInputChange}
                                        />
                                </Grid>  
                                <Grid item lg={6} md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        className='dark:text-white'
                                        required
                                        label="Confirm Password"
                                        type="password"
                                        autoComplete="current-password"                           
                                        variant="outlined"
                                        name="confirmpassword"
                                        onChange={handleInputChange}
                                        />
                                </Grid>  
                            </Grid>    
                            <input type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:cursor-pointer" value='Sign Up' />
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already SignIn? <a href="/Dashboard/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">LogIn here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
  </section>
</div>
  )
}

export default Register
