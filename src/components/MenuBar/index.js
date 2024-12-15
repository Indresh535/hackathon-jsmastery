"use client"
import React, {useEffect} from 'react'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { useStateContext } from '@/context/ContextProvider'
import { Tooltip } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ThemeSettings from './themeSettings/ThemeSettings'
import { redirect } from 'next/navigation'

const MenuBar = ({children}) => {
  const {activeMenu, themeSettings, setThemeSettings, currentMode, currentColor, isLoggedIn} = useStateContext();
  
  if (isLoggedIn === false){
    // If session is not their then redirect to login
    redirect('/login')
  }
  return ( 
    //needd to see line-15
    <div className='dark:bg-main-dark-bg bg-main-bg'>
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='flex relative dark:bg-main-dark-bg'>

        {/* Sidebar */}
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className={`w-full flex flex-col transition-all ${ activeMenu ? 'm-0 md:ml-72' : 'm-0 md:ml-20'}`}>
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className='flex-grow'>
            {themeSettings && <ThemeSettings />}
              {children}
            </div>

            {/* Footer */}
            <Footer />
        </div>

          <div className="fixed right-12 bottom-12" style={{ zIndex: '1000' }}>
            <Tooltip title="Settings" arrow>
              <button type='button'
                className="flex text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}>
                <SettingsOutlinedIcon />
              </button>
            </Tooltip>
          </div>
      </div>
    </div>
  </div>
  )
}

export default MenuBar































// import React from 'react'
// import Sidebar from './sidebar/Sidebar'
// import Navbar from './navbar/Navbar'
// import Footer from './footer/Footer'
// import { useStateContext } from '@/context/ContextProvider'
// import { Tooltip } from '@mui/material'
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import ThemeSettings from './themeSettings/ThemeSettings'

// const MenuBar = ({children}) => {
//   const {activeMenu, themeSettings, setThemeSettings, currentMode, currentColor} = useStateContext();
//   return ( 
//     //needd to see line-15
//   <div className='dark:bg-main-dark-bg bg-main-bg'>
//   <div className={currentMode === 'Dark' ? 'dark' : ''}>
//     <div className='flex relative dark:bg-main-dark-bg'>
//       <div className="fixed right-12 bottom-12" style={{ zIndex: '1000' }}>
//       <Tooltip title="Settings" arrow>
//       <button type='button' 
//         className="flex text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
//         style={{ background: currentColor, borderRadius: '50%' }}
//         onClick={ () => setThemeSettings(true) }>
//           <SettingsOutlinedIcon/>
//       </button> 
//       </Tooltip>
//     </div>
//         {activeMenu ? (
//         <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white shadow-lg'>
//         <Sidebar/>
//         </div>
//         ):(
//         <div className='w-0 dark:bg-secondary-dark-bg'>
        
//         </div>
//         )}
//     </div>
//   <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen
//     ${activeMenu
//       ? 'md:ml-72'
//       : 'flex-2'
//   }`}>
//       <div className="fixed md:static bg-white dark:bg-main-dark-bg navbar rounded-lg m-6 shadow-lg">
//       <Navbar/>
//     </div>
//     {themeSettings && <ThemeSettings />}
//     {children}
//     <Footer/>
//         </div>
// </div>   
//   </div>
//   )
// }

// export default MenuBar



