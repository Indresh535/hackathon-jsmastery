import React from 'react'
import Container from "@mui/material/Container";
import Iframe from 'react-iframe'
import { MotionDiv } from "@/components/FramerMotion";

const About = () => {

  return (
    <MotionDiv
     initial={{y:'20px', opacity:0.5}}
     transition={{type:'tween', duration:1}}
     whileInView={{y:0, opacity:1}}
     whileHover={{ scale: 1.01}}
    >
   <section className='w-100 min-h-screen flex flex-row'>
    <Container maxWidth="lg" className='flex justify-center items-center my-4'>
      <Iframe src='/Resume/index.html'
        width='100%'
        height='580px'
        id="resume_about"/>
      </Container>
   </section>
   </MotionDiv>
  )
}

export default About
