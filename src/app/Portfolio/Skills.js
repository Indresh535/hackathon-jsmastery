"use client"
import React  from 'react';
import { Carousel } from 'react-carousel-minimal';
import {AllImages} from '@/constants'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import VerticalCarousel from './Carousel/VerticalCarousel/';
import { MotionDiv } from "@/components/FramerMotion";


const Skills = () => {
  const data = [
    {
      image: AllImages.React_Udemy_Certificate.src,
      caption: "React Js"
    },
    {
      image: AllImages.SQL_Certificate.src,
      caption: "SQL"
    },   
    {
      image: AllImages.NodeJs_Certificate.src,
      caption: "Node Js"
    },
    {
      image: AllImages.DBMS_Certificate.src,
      caption: "DBMS"
    }, 
    {
      image: AllImages.Github_Certificate.src,
      caption: "GitHub"
    },
    {
      image: AllImages.pythonCertificate.src,
      caption: "Python"
    },
    {
      image: AllImages.Linux_Certificate.src,
      caption: "Linux"
    },
    {
      image: AllImages.IT_MasterDevops.src,
      caption: "Devops"
    },
    {
      image: AllImages.ISC2_Self_Placed.src,
      caption: "ISC2_Self_Placed"
    },
    {
      image: AllImages.Ethical_Hacking_Essential.src,
      caption: "Ethical Hacking Essential"
    },
    {
      image: AllImages.udemyMLCertificate.src,
      caption: "Machine Learning"
    },
    {
      image: AllImages.tcsRandMLCertificate.src,
      caption: "Artifical Intelligence"
    },
  ];


  //const leftSkillsImages = [AllImages.react, AllImages.vue,AllImages.mui, AllImages.bootstrap, AllImages.css, AllImages.sass,AllImages.html5]
  //const rightSkillsImages = [AllImages.mysql, AllImages.api, AllImages.python, AllImages.git, AllImages.aws, AllImages.java, AllImages.node]
  const leftSkillsImages = [AllImages.react, AllImages.vue,AllImages.mui]
  const rightSkillsImages = [AllImages.mysql, AllImages.api, AllImages.git]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'black'
  }
  
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black'
  }



  
  return (
    <section className='w-100 min-h-screen flex flex-col bg-slate-100 dark:bg-main-dark-bg'>
    <Container maxWidth="lg" className='flex flex-grow justify-center items-center my-4'>
      <div className="w-full">
        <div>
          <h1 className="my-12 text-4xl font-bold bg-gradient-to-b from-green-600 to-blue-300 bg-clip-text text-transparent text-center">
            My Certificates With My Knowledge
          </h1>
          <div className='my-12'>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}> 
              <MotionDiv
                initial={{x:'-20px', opacity:0.5}}
                transition={{type:'tween', duration:1}}
                whileInView={{x:0, opacity:1}}
                //whileHover={{ scale: 1.01}}
                >
                  <VerticalCarousel Images3D={leftSkillsImages} />
                </MotionDiv>
              </Grid>
              <Grid item xs={12} md={6}>
              <MotionDiv
                initial={{y:'20px', opacity:0.5}}
                transition={{type:'tween', duration:1}}
                whileInView={{y:0, opacity:1}}
                whileHover={{ scale: 1.01}}
                >
                  <Carousel
                    data={data}
                    time={5000}
                    width="100%" 
                    //height="450px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="#f7f7f7"
                    slideImageFit="contain"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                      textAlign: "center",
                      //maxWidth: "850px",
                      //maxHeight: "450px",
                      //margin: "40px auto",
                    }}
                    className='dark:border-blue-600'
                  />
                </MotionDiv>
              </Grid>
              <Grid item xs={12} md={3}>
              <MotionDiv
                initial={{x:'20px', opacity:0.5}}
                transition={{type:'tween', duration:1}}
                whileInView={{x:0, opacity:1}}
                //whileHover={{ scale: 1.01}}
                > 
                  <VerticalCarousel Images3D={rightSkillsImages} />
                </MotionDiv>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
    </section>
    

  )
}

export default Skills
