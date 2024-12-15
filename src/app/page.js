import React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import LoginIcon from '@mui/icons-material/Login';
import DownloadIcon from '@mui/icons-material/Download';
import { MotionDiv } from '@/components/FramerMotion';
import Carousel3D from "./Portfolio/Carousel/Carousel3D/"

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-row'>
    <Container maxWidth="lg" className='flex justify-center items-end'>
      <Grid container>
        <Grid item md={6} xs={12}>
          <MotionDiv
            initial={{y:'50vw', opacity:0.5}}
            transition={{type:'tween',delay:0.1, duration:1}}
            animate={{y:0, opacity:1}}
            whileHover={{ scale: 1.01 , color:'grey'}}
            >
              <div className='text'>
                    <h1 
                    className="text-4xl font-bold bg-gradient-to-b from-green-600 to-blue-300 bg-clip-text text-transparent">
                    Web development is not just about coding; <br/>It's about creating a digital experience that leaves a lasting impression.
                    </h1>
                    <p className="m-2 text-lg text-justify font-bold dark:text-white">
                    Let`s connect and explore endless possibilities together. Contact me, and together, we`ll make magic happen. Hire me, and I`ll bring my passion, skills, and dedication to elevate your team and project beyond expectations.
                    </p>
              </div> 
              <MotionDiv 
                initial={{x:'-50vh', opacity:0.5}}
                transition={{type:'tween',delay:0.1, duration:1.5}}
                animate={{x:0, opacity:1}}
                className='flex justify-start m-4'>
                    <Link href="/Portfolio" className="w-52 rounded-md py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 hover:text-white text-center">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease dark:text-white">Explore&nbsp;<LoginIcon/></span>
                    </Link>
                    <Link href="/Resume/My-Resume-Recently-Updated.pdf" download="Indresh-Resume.pdf" rel="noopener noreferrer" className="w-52 rounded-md py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-sky-600 text-sky-600 hover:text-white text-center">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-sky-600 transition duration-300 group-hover:text-white ease dark:text-white"><DownloadIcon/>&nbsp;Download Resume</span>
                    </Link>
              </MotionDiv>
          </MotionDiv>
        </Grid>
        <Grid item md={6} xs={12}>
        <div className="flex flex-1 justify-center">
          <Carousel3D />
        </div>
          <MotionDiv           
            initial={{y:'50vw', opacity:0.5}}
            transition={{type:'tween',delay:0.1, duration:1}}
            animate={{y:0, opacity:1}}
            whileHover={{ scale: 1.1 }}
            className="flex flex-1 justify-center">           
            <img src='/images/avatar/business-man-sitting-on-a-sofa.png' alt="My Profile Photo" width={100} height={150} className="w-400 h-96"/>
          </MotionDiv>
        </Grid>
      </Grid>
    </Container>
    </div>
  )
}
