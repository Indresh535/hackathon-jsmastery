"use client";
import React, { useState, useEffect } from "react";
import { useStateContext } from "@/context/ContextProvider";
import { Tooltip } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import EditNotificationsRoundedIcon from "@mui/icons-material/EditNotificationsRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Chat from "../popup/Chat";
import Image from "next/image";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} arrow>
  <button type='button'
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex items-center justify-center rounded-full h-4 w-4 right-2 top-2 text-sm text-white"
      >5</span>
      {icon}
  </button>
  </Tooltip>
);

export default function Navbar() {

const [open, setOpen] = useState(false)

  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
    <div className="flex justify-between p-2 bg-white m-6 rounded-md">
      <div className='block md:hidden'>
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color={currentColor}
          icon={<MenuRoundedIcon />}
        />
      </div>
    <div> </div>
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<ShoppingCartRoundedIcon />}
        />
        <NavButton
          title="Chat"
          dotColor="red"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<ChatBubbleOutlineRoundedIcon />}
        />
        <NavButton
          title="Notification"
          dotColor="red"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<EditNotificationsRoundedIcon />}
        />
        <Tooltip title="Pofile" arrow placement="top">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => setOpen(prev => !prev)}
          >
          <Image src='/images/avatar/profile-img.jpg' alt="profile img" className="rounded-full h-10 w-10 shadow-sm border" width={32} height={32}/>                
            <KeyboardArrowDownRoundedIcon className="text-gray-400 text-14" />           
          </div>
        </Tooltip>
        
      <div className={`${open ? 'visible' : 'hidden'} absolute z-50 right-4 my-12 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow transition-opacity duration-300 ease-in-out dark:bg-gray-700 dark:divide-gray-600`}>
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>

        {isClicked.cart && <Chat />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Chat />}
        {isClicked.userProfile && <Chat />}
      </div>
    </div>
    </div>
  );
}
