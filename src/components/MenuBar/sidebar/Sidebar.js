"use client"
// import React, {useState} from 'react'
// import Link from 'next/link'
// import Tooltip from '@mui/material/Tooltip';
// import { datalinks } from '@/data/data';
// import { useStateContext } from '@/context/ContextProvider'

// import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
// import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';



// const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
// const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

// const Sidebar = () => {
//   const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();
//   const [activeLinkIndex, setActiveLinkIndex] = useState('');

  
//   const handleCloseSideBar = () => {
//     if (activeMenu !== undefined && screenSize <= 900) {
//       setActiveMenu(false);
//     }
//   };

//   const handleLinkClick = (index) => {
//     setActiveLinkIndex(index);
//   };


//   return (
//     <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
//     {activeMenu && (
//       <div>
//         <div className='flex justify-between items-center'>
//           <Link href="#" onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
//             <SecurityRoundedIcon/><span>Dashboard</span>
//           </Link>
//           <Tooltip title="close" arrow>
//           <button 
//           type='button' 
//           onClick={() => setActiveMenu((prevActiveMenu) => (!prevActiveMenu))} 
//           className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'>
//               <HighlightOffRoundedIcon/>
//           </button>
//         </Tooltip>          
//       </div>
//         <div className='mt-10'>
//           {datalinks.map((navTitle) => (
//             <div key={navTitle.title}>
//             <p className='text-gray-400 m-3 mt-4 uppercase'>{navTitle.title}</p>              
//             {navTitle.links.map((navLink, index) => (              
//               <Link 
//               key={index}  
//               href={`/${navLink.name}`}
//               //onClick={handleCloseSideBar}
//               onClick={() => handleLinkClick(navLink.name)}
//               style={activeLinkIndex === navLink.name ? { backgroundColor: currentColor } : {}}
//               className={activeLinkIndex === navLink.name ? activeLink : normalLink}
//               >
//               {navLink.icon}
//               <span className='capitalize'>{navLink.name}</span>
//             </Link> 
//             ))}
//             </div>            
//           ))            
//           }
//         </div>
//         </div>
//         )}
//     </div>
//   )
// }

// export default Sidebar



//*********************************************************************************************************** */

// components/Sidebar.js
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Tooltip from '@mui/material/Tooltip';
// import { datalinks } from '@/data/data';
// import { useStateContext } from '@/context/ContextProvider';

// import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
// import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

// const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
// const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

// const Sidebar = () => {
//   const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleToggle = () => {
//     setActiveMenu((prevActiveMenu) => !prevActiveMenu);
//   };

//   const handleCloseSideBar = () => {
//     if (activeMenu !== undefined && screenSize <= 900) {
//       setActiveMenu(false);
//     }
//   };

//   const handleLinkClick = (index) => {
//     setActiveLinkIndex(index);
//   };

//   const [activeLinkIndex, setActiveLinkIndex] = useState('');

//   return (
//     <nav className={`sidebar ${isDarkMode ? 'dark' : ''}`}>
//       <header>
//         <div className="image-text">
//           <span className="image">
//             <img src="/logo.png" alt="" />
//           </span>
//           <div className="text logo-text">
//             <span className="name">Codinglab</span>
//             <span className="profession">Web developer</span>
//           </div>
//         </div>
//         <i className={`bx bx-chevron-${activeMenu ? 'right' : 'left'} toggle`} onClick={handleToggle}></i>
//       </header>
//       <div className="menu-bar">
//         <div className="menu">
//           <li className="search-box">
//             <i className="bx bx-search icon"></i>
//             <input type="text" placeholder="Search..." />
//           </li>
//           <ul className="menu-links">
//             {datalinks.map((navTitle, titleIndex) => (
//               <React.Fragment key={titleIndex}>
//                 <li>
//                   <p className="text-gray-400 m-3 mt-4 uppercase">{navTitle.title}</p>
//                 </li>
//                 {navTitle.links.map((navLink, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link
//                       href={`/${navLink.name}`}
//                       onClick={() => handleLinkClick(navLink.name)}
//                       style={activeLinkIndex === navLink.name ? { backgroundColor: currentColor } : {}}
//                       className={activeLinkIndex === navLink.name ? activeLink : normalLink}
//                     >
//                       {navLink.icon}
//                       <span className="capitalize">{navLink.name}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </React.Fragment>
//             ))}
//           </ul>
//         </div>
//         <div className="bottom-content">
//           <li>
//             <Link href="#">
//               <i className="bx bx-log-out icon"></i>
//               <span className="text nav-text">Logout</span>
//             </Link>
//           </li>
//           <li className="mode" onClick={() => setIsDarkMode((prevMode) => !prevMode)}>
//             <div className="sun-moon">
//               <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon`}></i>
//               <i className={`bx ${isDarkMode ? 'bx-moon' : 'bx-sun'} icon`}></i>
//             </div>
//             <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
//             <div className="toggle-switch">
//               <span className="switch"></span>
//             </div>
//           </li>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;

//*********************************************** Good  */
import React, { useState } from "react"
import { useStateContext } from "@/context/ContextProvider";
import { datalinks } from '@/data/data';
import Link from "next/link";

export default function Sidebar() {
  const active = true;
  const alert = true;
  const {
    activeMenu,
    setActiveMenu,
  } = useStateContext();
  
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (titleIndex) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [titleIndex]: !prevState[titleIndex],
    }));
  };

  return (
    <aside className="fixed h-screen z-1">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm overflow-y-scroll">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              activeMenu ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {activeMenu ? "Close"  : "Open" }
          </button>
        </div>
        <ul>
        {datalinks.map((navTitle, titleIndex) => (
          <li key={titleIndex}>
            {navTitle.title}
            <ul className="flex-1 px-3">
              {navTitle?.links.map((navMenu, index) => (
                <li
                  key={index}
                  className={`
                    relative flex items-center py-2 px-3 my-1
                    font-medium rounded-md cursor-pointer
                    transition-colors group
                    ${
                      activeMenu
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                        : "hover:bg-indigo-50 text-gray-600"
                    }
                  `}
                  onClick={() => toggleSubmenu(titleIndex)}
                >
                  {navMenu.icon}
                  <span
                    key={titleIndex}
                    className={`overflow-hidden transition-all ${
                      activeMenu ? "w-52 ml-3" : "w-0"
                    }`}
                  >
                  <Link href={navMenu.path}>{navMenu.name}</Link>                    
                  </span>
                  {navMenu.subtile && navMenu.subtile.length > 0 && (
                    <ul>
                      {navMenu.subtile.map((submenu, subIndex) => (
                        <li 
                        className={`flex flex-col items-center
                          ${openSubmenus[titleIndex]
                            ? "block" // Submenu is open
                            : "hidden" // Submenu is closed
                          }`} key={subIndex}>
                          <Link href={submenu.subPath}>{submenu.subIcon} &nbsp; {submenu.subName}</Link>                          
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
            {/*<ul>
                {datalinks.map((navTitle, titleIndex) => (
                    <li key={titleIndex}>
                    {navTitle.title}
                        <ul className="flex-1 px-3">
                          {navTitle.links.map((navMenu, index) => (
                            <li key={index} 
                            className={`
                            relative flex items-center py-2 px-3 my-1
                            font-medium rounded-md cursor-pointer
                            transition-colors group
                            ${
                              active
                                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                                : "hover:bg-indigo-50 text-gray-600"
                            }
                        `}>
                            {navMenu.icon}
                            <span key={titleIndex}
                                className={`overflow-hidden transition-all ${
                                  activeMenu ? "w-52 ml-3" : "w-0"
                                }`}
                              >
                            {navMenu.name}</span>
                                {navMenu.subtile && navMenu.subtile.length > 0 && (
                                    <ul>
                                        {navMenu.subtile.map((submenu, subIndex) => (
                                          <li key={subIndex}>{submenu.icon} &nbsp; {submenu.subname}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>                            
                          ))}
                        </ul>
                    </li>
                ))}
            </ul>
          {/*<ul className="flex-1 px-3">
                {datalinks.map((navTitle, titleIndex) => ( 
                      <li
                          className={`
                            relative flex items-center py-2 px-3 my-1
                            font-medium rounded-md cursor-pointer
                            transition-colors group
                            ${
                              active
                                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                                : "hover:bg-indigo-50 text-gray-600"
                            }
                        `}
                        >
                        icon
                  <span key={titleIndex}
                    className={`overflow-hidden transition-all ${
                      activeMenu ? "w-52 ml-3" : "w-0"
                    }`}
                  >
                  {navTitle.title}
                  <div>
                  {navTitle.links.map((navMenu, index) => (
                    <ul key={index}>
                      <li>
                        {navMenu.icon} &nbsp; {navMenu.name}
                        {navMenu.subtile && navMenu.subtile.length > 0 && (
                          <ul>
                            {navMenu.subtile.map((submenu, subIndex) => (
                              <li key={subIndex}>{submenu.icon} &nbsp; {submenu.subname}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    </ul>
                  ))}
                  </div>
                  </span>
                  {alert && (
                    <div
                      className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        activeMenu ? "" : "top-2"
                      }`}
                    />
                  )}

                  {!activeMenu && (
                    <div
                      className={`
                      absolute left-full rounded-md px-2 py-1 ml-6
                      bg-indigo-100 text-indigo-800 text-sm
                      invisible opacity-20 -translate-x-3 transition-all
                      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                  `}
                    >
                      text
                    </div>
                  )}
                </li>
                ))}
                  </ul>*/}
      

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="Name"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${activeMenu ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            MoreIcon
            :
          </div>
        </div>
      </nav>
      </aside>

  )
}


    {/*<aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? "Close"  : "Open" }
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
          <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      icon
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        text1
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          text
        </div>
      )}
    </li>
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            MoreIcon
            :
          </div>
        </div>
      </nav>
      </aside>*/}
