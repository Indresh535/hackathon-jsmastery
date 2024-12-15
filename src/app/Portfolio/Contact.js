"use client";
import React, {useState} from "react";
import Link from "next/link";
import { Grid, Container, Card, Button, } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { motion } from "framer-motion";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser'

const Contact = () => {

  const intialValues = {user_name: '', user_email: '', user_subject: '', user_message: ''}

  const [formData, setformData] = useState(intialValues)
  const [loadingButton, setLoadingButton] = useState(false)

  
  const handleChangeInput = (e) => {
    const {id, value} = e.target
    setformData({...formData, [id]:value})
    console.log("e.target", e.target.value)
  }

  const validate = () => {
    const temp = {}  
    //temp.EmailAddress = data.EmailAddress === "" ? false : true   OR
    temp.user_name = formData.user_name !== ""
    temp.user_email = formData.user_email !== ""
    temp.user_subject = formData.user_subject !== ""
    temp.user_message = formData.user_message !== ""
    return Object.values(temp).every(x => x === true)
  }

  const handleSendEmail = (e) => {
    e.preventDefault()
    if (validate()){
      setLoadingButton(true)
      emailjs.sendForm('service_n1d6j0s', 'template_4zw47pk', e.target, 'p_Olk90hrauHOMNKC')
      .then((result) => {
          //console.log("result.text", result.text);
          setLoadingButton(false)
          toast.success('Message sent')
          setformData(intialValues)
      }, (error) => {
          //console.log("error.text", error.text);
          toast.error('Invalid Server Error')
      })
    }else{
      toast.error('Please fill out the required field')
    }    
  }


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="text-6xl my-4 font-extrabold text-blue-600 dark:text-blue-400">
            Hire Me
          </p>

          <h1 className="my-4 text-6xl font-extrabold text-gray-800 md:text-3xl dark:text-white">
          Let's Connect and Create Something Amazing Together
          </h1>

        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Link href="mailto:indreshindresh535@gmail.com" alt='email' rel="noopener noreferrer">
            <div className="border-1 rounded-lg shadow-sm p-4 hover:scale-105 hover:bg-slate-100 dark:hover:bg-main-dark-bg dark:border-blue-600">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-400">
                Reach me by mail
              </p>
              <p className="mt-2 text-md text-blue-500 dark:text-blue-400">
                indreshindresh535@gmail.com
              </p>
            </div>
            </Link>

            <Link href="https://github.com/Indresh535" alt='github' target="_blank" rel="noopener noreferrer">
            <div className="border-1 rounded-lg shadow-sm p-4 hover:scale-105 hover:bg-slate-100 dark:hover:bg-main-dark-bg dark:border-blue-600">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              </span>

              <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                GitHub
              </h2>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-400">
                You can check my coding skills in
              </p>
              <p className="mt-2 text-md text-blue-500 dark:text-blue-400">
                Github
              </p>
            </div>
            </Link>


            <Link href="https://www.linkedin.com/in/indresh-2208891a6" alt='linkedin' target="_blank" rel="noopener noreferrer" >
            <div className="border-1 rounded-lg shadow-sm p-4 hover:scale-105 hover:bg-slate-100 dark:hover:bg-main-dark-bg dark:border-blue-600">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              </span>

              <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                LinkedIn
              </h2>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-400">
                Let's connect in 
              </p>
              <p className="mt-2 text-md text-blue-500 dark:text-blue-400">
                www.linkedin.com/indresh
              </p>
            </div>
            </Link>

            <Link href="tel:9113046388" alt='Phone No' rel="noopener noreferrer">
            <div className="border-1 rounded-lg shadow-sm p-4 hover:scale-105 hover:bg-slate-100 dark:hover:bg-main-dark-bg dark:border-blue-600">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-400">
                Connect with me by dailing...
              </p>
              <p className="mt-2 text-md text-blue-500 dark:text-blue-400">
                +91 9113046388
              </p>
            </div>
            </Link>
          </div>

          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form onSubmit={handleSendEmail}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label htmlFor="user_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First Name</label>
                    <TextField
                      className='w-full bg-white dark:bg-gray-900 dark:text-white'
                      required
                      id="user_name"
                      name="user_name"
                      label="First Name"  
                      placeholder="john"                     
                      variant="outlined"
                      onChange={handleChangeInput}
                    />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label htmlFor="lastName" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Last Name</label>
                    <TextField
                      className='w-full bg-white dark:bg-gray-900 dark:text-white'
                      required
                      id="lastName"
                      label="Last Name"  
                      placeholder="doe"                     
                      variant="outlined"
                    />
                </div>
              </div>

              <div className="mt-4">
              <label htmlFor="user_email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">E-mail</label>
                          <TextField
                            className='w-full bg-white dark:bg-gray-900 dark:text-white'
                            required
                            id="user_email"
                            name="user_email"
                            label="Email Id"  
                            placeholder="johndoe@example.com"                     
                            variant="outlined"
                            type="email"
                            onChange={handleChangeInput}
                          />
              </div>
              <div className="mt-4">
              <label htmlFor="user_subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Subject</label>
                          <TextField
                            className='w-full bg-white dark:bg-gray-900 dark:text-white'
                            required
                            id="user_subject"
                            name="user_subject"
                            label="Subject"  
                            placeholder="Let us know how we can help you"                     
                            variant="outlined"
                            onChange={handleChangeInput}
                          />
              </div>

              <div className="mt-4">
                <label htmlFor="user_message" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your message</label>                     
                      <TextField
                      className='w-full bg-white dark:bg-gray-900 dark:text-white'
                      fullWidth
                      required
                      id="user_message"
                      name="user_message"
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Leave a comment..."
                      onChange={handleChangeInput}
                    />
              </div>
              <LoadingButton
              loading={loadingButton}
              variant="outlined"
              type="submit" 
              className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Send message
            </LoadingButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
