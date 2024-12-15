//"use client"
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-100 z-20">
	<div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
		<div>
            <Image src='/images/avatar/myLogo.png' alt="My Profile Photo" className="w-full h-80 object-contain animate-bounce" width={100} height={80}/>
            <CircularProgress /> 
        </div>
	</div>
</div>
  )
}

export default Loading
