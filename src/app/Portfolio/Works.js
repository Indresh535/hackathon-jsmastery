"use client";
import { React, useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { MotionDiv, MotionH2 } from "@/components/FramerMotion";
import { Tilt } from "react-tilt";
import { AllImages } from "../../constants";
import {Button, Container, Grid} from '@mui/material';

const myfilterWorksCompleted = [  
  {
    title: "Vuexy - Admin Template",
    description: "Vuexy - MUI React Admin Template. This Template I had designed for Our Compnay website",
    imgUrl: AllImages.Vuexy_Project,
    tags: "React-Js",
    deployLink: "https://vuexy-admin-template-one.vercel.app",
    githubLink: "https://github.com/Indresh535/Vuexy-Complete-Admin-Project-Setup",
  },
  {
    title: "Toll Calculator",
    description: "Calculate toll tax, fuel charges for trips across India cities. See toll gates, toll rates for FASTag, discounts etc. and compare routes to plan a perfect",
    imgUrl: AllImages.Toll_Calculator_Project,
    tags: "React-Js",
    deployLink: "https://map-up-toll-calculator-assignment.vercel.app",
    githubLink: "https://github.com/Indresh535/MapUp-Toll-Calculator-Assignment",
  },
  {
    title: "Track Xpress",
    description: "Integrate Xpress Truck tracking system with live location through Tom Tom map tracking API and webhook. Contact customer and get restful API docs",
    imgUrl: AllImages.TrackXpress_Project,
    tags: "React-Js",
    deployLink: "https://track-xpress.vercel.app",
    githubLink: "https://github.com/Indresh535/TrackXpress",
  }, 
  {
    title: "SigmaOT",
    description: "This is done by using Next-Js with Responsive UI-UX Design for our company SigmaOT",
    imgUrl: AllImages.SigmaOT_Project,
    tags: "React-Js",
    deployLink: "https://sigma-ot.vercel.app",
    githubLink: "https://github.com/Indresh535/SigmaOT",
  }, 
  {
    title: "Password Manager",
    description:
      "The user shall be able to save all the username and passwords information of the accounts he holds in one place using this application",
    imgUrl: AllImages.Password_Manager_Project,
    tags: "Web-App",
    deployLink: "http://securepasswordmanager.infinityfreeapp.com",
    githubLink: "https://github.com/Indresh535/password_manager.git",
  },  
  {
    title: "D3-Js Dashboard",
    description: "A Dashoard using Material UI and D3-JS Library for Charts with the Vite + react",
    imgUrl: AllImages.D3_JS_Dashboard_Project,
    tags: "React-Js",
    deployLink: "https://assidus-d3-js-tasks.vercel.app",
    githubLink: "https://github.com/Indresh535/Assidus-D3-Js-Tasks",
  }, 
  {
    title: "Admission Portal",
    description:
      "This offers many flexible and convenient features, allowing Students to explore the courses offered by the college and take admission through it.",
    imgUrl: AllImages.Admission_Portal_Project,
    tags: "Web-App",
    deployLink: "https://myprojecttrailer.000webhostapp.com",
    githubLink: "https://github.com/Indresh535/Admission_Portal.git",
  },
  {
    title: "Environmental Hazard Prediction",
    description: "This project aims environmental hazard like forest fire, Rain Fall and  Air Quality Index(AQI) to predict hazards elements in the environments.",
    imgUrl: AllImages.Environmental_prediction_Project,
    tags: "Python",
    deployLink: "#",
    githubLink:
      "https://github.com/Indresh535/Environmental_hazard_prediction.git",
  }, 
  {
    title: "Ship Detection",
    description: "The project aims to develop a ship detection system using (CNNs). It has applications in various fields, including maritime surveillance, environmental monitoring, and security.",
    imgUrl: AllImages.Ship_Detection_Project,
    tags: "Python",
    deployLink: "#",
    githubLink: "https://github.com/Indresh535/ShipDetectionFlask",
  }, 
  {
    title: "Bone Fracture Detection",
    description: "Bone-related joint deterioration causes discomfort, decreased joint function, joint degeneration, and joint deformity. Early intervention enhances the prognosis, however it is crucial to accurate.",
    imgUrl: AllImages.Bone_Fracture_Detection_Project,
    tags: "Python",
    deployLink: "#",
    githubLink: "https://github.com/Indresh535/Bone_Fracture_Detection_master",
  },
  {
    title: "Stock Analysis",
    description: "This Project includes the description of indicators which can be used for technical analysis of Indian market Nifty stocks.",
    imgUrl: AllImages.Stock_Analysis_Project,
    tags: "Python",
    deployLink: "#",
    githubLink: "https://github.com/Indresh535/stock_analysis.git",
  },
  {
    title: "Go Server for Sorting Arrays",
    description: "Developd a Go server to demonstrate sequential and concurrent processing and Build a CI-CD piple for deploying docker",
    imgUrl: AllImages.Go_server_sorting_Project,
    tags: "DevOps",
    deployLink: "https://mapup-goserver-task.onrender.com",
    githubLink: "https://github.com/Indresh535/MapUp-Backend-GoServer-Tasks",
  },
];

const Works = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(myfilterWorksCompleted);
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);

    // Load the initial data and set the filterWork state
    useEffect(() => {
      setFilterWork(myfilterWorksCompleted.slice(0, 4));
      setShowMore(myfilterWorksCompleted.length > 4);
    }, []);
  

  const handlerWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(myfilterWorksCompleted.slice(0, 4));
        setShowMore(myfilterWorksCompleted.length > 4);
      } else  {
        const filteredWorks = myfilterWorksCompleted.filter((w) =>
          w.tags.includes(item)
        );
        setFilterWork(filteredWorks.slice(0, 4));
        setShowMore(filteredWorks.length > 4);
      }
    }, 500);
  };

  const handleShowMore = () => {
    setShowMore(false);
    setFilterWork(myfilterWorksCompleted);
    setShowLess(true)
  };

  const handleShowLess = () => {
    setShowLess(false)
    setFilterWork(myfilterWorksCompleted.slice(0, 4));
    setShowMore(true);
  };

  return (
    <section className="w-100 min-h-screen bg-slate-100 dark:bg-main-dark-bg">
      <Container maxWidth="md" className='my-4'>
      <MotionH2                       
        initial={{y:'-50px', opacity:0.5}}
        transition={{type:'tween', duration:1}}
        whileInView={{y:0, opacity:1}}
        whileHover={{ scale: 1.01}}
        className="head-text dark:text-white">
        I Know that Creativity and Innovations Never Ends
      </MotionH2>
        <MotionDiv                       
        initial={{y:'50px', opacity:0.5}}
        transition={{type:'tween', duration:1}}
        whileInView={{y:0, opacity:1}}
        className="flex flex-wrap justify-center items-center space-x-2 space-y-2 mb-8">
          {["Web-App", "React-Js", "DevOps", "Python", "All"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handlerWorkFilter(item)}
                className={`p-2 rounded-lg bg-blue-600 text-black font-bold cursor-pointer border border-black-200 hover:bg-blue-400 dark:bg-blue-600 dark:text-black ${
                  activeFilter === item ? "p-4 border-2 border-blue-600 bg-slate-200 dark:bg-white" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </MotionDiv>
        
        <MotionDiv
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-wrap justify-center items-center"
        >
          <Grid container>
            {filterWork.map((myWorks, index) => (
              <Grid key={index} item md={6} sm={12}>
                <Tilt options={{ max: 25, scale: 1.05 }} key={index}>
                  <div className="flex flex-col mx-4 my-8 p-4 rounded-lg bg-white shadow-lg border border-black-800 cursor-pointer transition-transform hover:scale-105 dark:bg-gray-800 dark:text-white dark:border-2 dark:border-blue-600">
                    <div className="relative h-48">
                      <img
                        src={myWorks.imgUrl.src}
                        alt={myWorks.title}
                        className="w-full h-full object-cover border-1 rounded-lg"
                      />
                      <MotionDiv
                        whileHover={{ opacity: [0, 1] }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                          staggerChildren: 0.5,
                        }}
                        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0"
                      >
                        <a
                          href={myWorks.deployLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MotionDiv
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.9] }}
                            transition={{ duration: 0.25 }}
                            className="w-10 h-10 flex items-center justify-center bg-white rounded-full"
                          >
                            <RemoveRedEyeOutlinedIcon className="text-black" />
                          </MotionDiv>
                        </a>
                        <a
                          href={myWorks.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MotionDiv
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.9] }}
                            transition={{ duration: 0.25 }}
                            className="w-10 h-10 flex items-center justify-center bg-white rounded-full ml-2"
                          >
                            <GitHubIcon className="text-black" />
                          </MotionDiv>
                        </a>
                      </MotionDiv>
                    </div>
                    <div className="flex justify-center items-center mt-[-38px]">                   
                        <div className="w-32 p-2 rounded-md text-center bg-white text-black z-10 dark:bg-gray-800 dark:text-white">
                        {myWorks.tags}
                      </div>                    
                    </div> 
                    <div className="flex flex-col items-center mt-4">
                      <h4 className="font-bold">{myWorks.title}</h4>
                      <p className="mt-2 text-sm text-center">
                        {myWorks.description}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </Grid>
            ))}
          </Grid>
        </MotionDiv>  
        {showMore && (
          <MotionDiv                                
          initial={{y:'50px', opacity:0.5}}
          transition={{type:'tween', duration:1}}
          whileInView={{y:0, opacity:1}} 
          className="flex justify-center mt-4">
          <Button onClick={handleShowMore} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Show More
            </span>
          </Button>
          </MotionDiv>
        )}

        {showLess && (
          <MotionDiv                       
          initial={{y:'50px', opacity:0.5}}
          transition={{type:'tween', duration:1}}
          whileInView={{y:0, opacity:1}}
          className="flex justify-center mt-4">
          <Button onClick={handleShowLess} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Show Less
            </span>
          </Button>
          </MotionDiv>
        )}
      </Container>
    </section>
  );
};

export default Works;
