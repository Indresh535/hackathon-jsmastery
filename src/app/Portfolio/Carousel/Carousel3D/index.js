"use client"
import { useState, useEffect } from 'react'
import Carousel  from "@/components/Carousel/";
import {AllImages} from '@/constants'
import BallCanvas from '@/components/Canvas/';


const style = {
    width: 120,
    height: 140,
  };


  
const Carousel3D = () => {
  const [isClient, setIsClient] = useState(false)

  
  useEffect(() => {
    setIsClient(true)    
  }, [])
 
  if (!isClient) {
    return null; // Don't render on the server side
  }

  return (
    <div suppressHydrationWarning={true}>
   
                  <Carousel
                    height={180}
                    width={380}
                    yOrigin={42}
                    yRadius={48}
                    autoPlay={true}
                  >
                    {[AllImages.python, AllImages.linux_3d, AllImages.devops, AllImages.react, AllImages.mysql].map((skillsImg, index) => (
                      <div key={index} style={style}>
                        <BallCanvas icon={skillsImg.src} />
                        {/* <img alt="Skills" src={skillsImg.src} /> */}
                      </div>
                    ))}
                  </Carousel>
 
    </div>
  )
}

export default Carousel3D
