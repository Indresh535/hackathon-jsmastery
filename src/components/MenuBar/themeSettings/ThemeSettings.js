import React from "react";
import { Tooltip } from "@mui/material";
import { themeColors } from "@/data/data";
import { useStateContext } from "@/context/ContextProvider";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const ThemeSettings = () => {
    const {setColorFunc, setModeFunc, currentMode, currentColor, setThemeSettings} = useStateContext()

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-main-bg dark:bg-main-dark-bg w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light"
          >
            <HighlightOffRoundedIcon/>
          </button>
        </div>
        <div className="flex-col border-t-2 border-color p-4 ml-4">
        <p className="font-semibold text-lg">Theme Options</p>
        <div className="mt-4">
          <input
            type="radio"
            id="light"
            name="theme"
            value="Light"
            className="cursor-pointer"
            onChange={setModeFunc}
            defaultChecked={currentMode === 'Light'}
          />
          <label htmlFor="light" className="ml-2 text-md cursor-pointer">
            Light
          </label>
        </div>
        <div className="mt-4">
          <input
            type="radio"
            id="dark"
            name="theme"
            value="Dark"
            className="cursor-pointer"
            onChange={setModeFunc}
            defaultChecked={currentMode === 'Dark'}
          />
          <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
            Dark
          </label>
        </div>
      </div>
      <div className="flex-col border-t-2 border-color p-4 ml-4">
      <p className="font-semibold text-lg">Theme Colors</p>
      <div className="flex gap-3">
      {themeColors.map((item, index) => (
        <Tooltip key={index} title={item.name}>
            <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
            <button type='button' 
              className="h-10 w-10 rounded-full cursor-pointer"
              style={{ backgroundColor:item.color}}
              onClick={() => setColorFunc(item.color)}>
              <CheckOutlinedIcon 
              className={`ml-2  text-2xl text-white 
              ${item.color === currentColor ? 'block' : 'hidden'}`}
              />
            </button>
            </div>
        </Tooltip>
      ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
