import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';


  
const Portfolio = () => {

    return (
    <div>
        <Home/>
        <Works/>
        <About/>
        <Skills/>
        <Contact/>
    </div>
    )
}

export default Portfolio;
// "use client"
// import React from 'react';
// import { images } from '@/constants/';
// import { motion } from 'framer-motion';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };

// const Portfolio = () => {
//   return (
//     <div id="home" className="app__header app__flex">
//       <motion.div
//         variants={scaleVariants}
//         whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//         transition={{ duration: 0.5 }}
//         className="app__header-info"
//       >
//         <div className="app__header-badge">
//           <div className="badge-cmp app__flex">
//             <span className="text-3xl">👋</span>
//             <div style={{ marginLeft: '1rem' }}>
//               <p className="p-text">Hello I am</p>
//               <h1 className="head-text">Indresh B S</h1>
//             </div>
//           </div>
//           <div className="tag-cmp app__flex flex-col mt-12">
//             <p className="p-text">Full Stack</p>
//             <p className="p-text">Web Developer</p>
//           </div>
//         </div>
//         <motion.div
//           variants={scaleVariants}
//           whileInView={scaleVariants.whileInView}
//           className="app__header-circles2 flex justify-end"
//         >
//           {[
//             images.python,
//             images.devops,
//             images.git,
//           ].map((circle, index) => (
//             <div className="circle-cmp app__flex" key={`circle-${index}`}>
//               <img src={circle} alt="fgf" className="w-60 h-60" />
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//       <motion.div
//         whileInView={{ opacity: [0, 1] }}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__header-img"
//       >
//         <img
//           src={images.profile}
//           alt="ProfileImage"
//           className="ProfileImage object-contain z-10 w-300"
//         />
//         <div className="profileAbout absolute left-1/4 top-225 z-10 p-4 bg-blue-100 rounded-15">
//           <h3 className="title text-blue-600 font-bold text-lg">Indresh B S</h3>
//           <h4 className="subtitle text-blue-800 font-bold mt-2">Full stack Web Developer</h4>
//           <p className="description mt-2">
//             A motivated individual with good knowledge of languages and development tools, seeking
//             a position in a growth-oriented company where I can use my skills to the advantage of
//             the company while having the scope to develop my own skills.
//           </p>
//         </div>
//         <motion.img
//           whileInView={{ scale: [0, 1] }}
//           transition={{ duration: 1, ease: 'easeInOut' }}
//           className="overlay_circle absolute left-0 right-0 bottom-0 z-0 w-full h-90%"
//           src={images.circle}
//           alt="imageCircle"
//         />
//       </motion.div>

//       <motion.div
//         variants={scaleVariants}
//         whileInView={scaleVariants.whileInView}
//         className="app__header-circles flex justify-start mt-1"
//       >
//         {[images.linux, images.all5, images.vue].map((circle, index) => (
//           <div className="circle-cmp app__flex" key={`circle-${index}`}>
//             <img src={circle} alt="fgf" className="w-60 h-60" />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Portfolio;
