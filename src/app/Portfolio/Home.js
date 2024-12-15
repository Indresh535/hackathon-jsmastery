import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ModelViewer from "@/components/ModelViewer/page";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { MotionDiv, MotionP } from "@/components/FramerMotion";
import dynamic from 'next/dynamic';
import Carousel3D from "./Carousel/Carousel3D/";

const Home = () => { 
 
  return (
    <section className="w-full min-h-screen flex flex-row">
      <Container
        maxWidth="lg"
        className="flex justify-center items-end my-4"
      >
        <Box>
          <Grid container>
            <Grid item md={6} xs={12}>
            
              <Grid item xs={12}>
                <MotionDiv
                initial={{y:'-20px', opacity:0.5}}
                transition={{type:'tween',delay:0.1, duration:1}}
                whileInView={{y:0, opacity:1}} 
                whileHover={{ scale: 1.05}}
                  className="w-80 bg-slate-100 dark:bg-main-dark-bg dark:border-white flex justify-start p-6 shadow-xl rounded-xl">
                  <span className="text-6xl flex items-center">
                    <img src='/images/avatar/hello-animating.gif' alt='hello-animating'/>
                  </span>
                  <div>            
                    <p className="p-text dark:text-white">Hello I am</p>
                    <h1 className="head-text dark:text-white">Indresh</h1>
                  </div>
                </MotionDiv>
              </Grid>
              <Grid item xs={12} className="flex justify-end">
                <MotionDiv 
                initial={{y:'50px', opacity:0.5}}
                transition={{type:'tween',delay:0.1, duration:1}}
                whileInView={{y:0, opacity:1}} 
                whileHover={{ scale: 1.05}}
                className="w-56 m-4 p-4 bg-slate-100 shadow-xl rounded-md dark:bg-main-dark-bg dark:border-white">
                  <div>
                    <p className="font-semibold text-md dark:text-white">
                      FULL STACK
                      <br />
                      WEB DEVELOPER
                    </p>
                  </div>
                </MotionDiv>
              </Grid>
              <Grid item xs={12}>
                <MotionP 
                  initial={{y:'-50px', opacity:0.5}}
                  transition={{type:'tween',delay:0.1, duration:1}}
                  whileInView={{y:0, opacity:1}}
                  whileHover={{ scale: 1.05}} 
                  className="bg-slate-100 font-semibold shadow-lg rounded-md text-justify m-4 p-4 dark:bg-main-dark-bg dark:text-white ">
                  A motivated individual with good knowledge of languages and
                  development tools, seeking a position in a growth-oriented
                  company where I can use my skills to the advantage of the
                  company while having the scope to develop my own skills.
                </MotionP>
              </Grid>
              <MotionDiv 
              initial={{y:'50px', opacity:0.5}}
              transition={{type:'tween',delay:0.1, duration:1}}
              whileInView={{y:0, opacity:1}} 
              className="flex justify-start m-4">
                <Link
                  href="#"
                  className="w-52 rounded-md py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 hover:text-white text-center no-underline"
                >
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease dark:text-white">
                    Hire Me&nbsp;
                    <WorkOutlineIcon />
                  </span>
                </Link>
              </MotionDiv>
            </Grid>
            <Grid item md={6} xs={12}>
            <MotionDiv                 
            initial={{y:'10px', opacity:0.5}}
            transition={{type:'tween',delay:0.1, duration:1}}
            animate={{y:0, opacity:1}}
            whileHover={{ scale: 1.01}}
            >
              <Grid item xs={12}>
                <div className="flex justify-center items-center">             
                  <Carousel3D/>   
                </div>
              </Grid>
              <Grid item xs={12}>
                <ModelViewer src="/images/Model3D/computer.glb" />
                {/*<Image src='/images/avatar/hero-image.jpg' alt="My Profile Photo" className="w-72 h-72 bg-red-600" width={100} height={10}/>*/}
              </Grid>
              </MotionDiv>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Home;
