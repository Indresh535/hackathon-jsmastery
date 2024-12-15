"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { pageslinks } from '@/data/data';
import Link from 'next/link';
import { useStateContext } from "@/context/ContextProvider";
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Tooltip } from '@mui/material';
import SimpleChatBot from '../SimpleChatBot';

const AppBarLayout = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const {currentMode, setModeFunc } = useStateContext();
  const [theme, setTheme] = useState('Light');

  const handleThemeChange = () => {
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme(newTheme);
    setModeFunc({ target: { value: newTheme } });
  };

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-white shadow-md fixed w-full top-0 z-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 p-4">
          <Link href="/" className="flex items-center">
            <Image
              src='/images/avatar/myLogo.png'
              className="h-8 mr-3"
              alt="Flowbite Logo"
              width={40}
              height={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Portfolio
            </span>
          </Link>
          <button
            onClick={handleMobileNavToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={mobileNavOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
              <MenuIcon/>
          </button>
          <div
            className={`${
              mobileNavOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <span onClick={handleThemeChange} className='border-2 rounded-lg p-2 hover:cursor-pointer hover:bg-slate-300 transform transition duration-500 hover:scale-110'>
            {theme === 'Light' ? (
              <Tooltip title='Switch to Dark' arrow>
              <LightModeOutlinedIcon fontSize='medium'/>
              </Tooltip>
            ) : (
              <Tooltip title='Switch to Light' arrow>
              <DarkModeOutlinedIcon fontSize='medium' style={{ color: 'white' }}/>
              </Tooltip>
            )}
          </span>
          </li>
              {pageslinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      { children }
      <div>
        <SimpleChatBot/>
      </div>
    </div>
  );
};

export default AppBarLayout;
