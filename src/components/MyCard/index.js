import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MyCard = ({href = '/', imageSrc, cardHeader, iconImg, iconDescription, cardBody, cardFooter, timeStampLeft, timeStampRight }) => {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full'>
    <Link href={href} rel='noreferrer' alt='click link'>
    {imageSrc && (
        <Image
        loader={() => imageSrc} 
        src={imageSrc}
        alt='card image' 
        height={320} width={300}
        className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
      />
    ) }
      <div className='p-3 flex flex-col gap-2 w-full'>
        <p className='truncate text-lg font-semibold text-slate-700'>
          {cardHeader}
        </p>
        {iconImg && (
        <div className='flex items-center gap-1'>
          <Image loader={() => iconImg}  src={iconImg} className='h-4 w-4 text-green-700' height={20} width={20} alt='icon'/>
          <p className='text-sm text-gray-600 truncate w-full'>
          {iconDescription}
          </p>
        </div>  
        )}     
        <p className='text-slate-500 mt-2 font-semibold '>
          {cardBody}
        </p>
        <p className='text-sm text-gray-600 line-clamp-2'>
        {cardFooter}
        </p>
        <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
            {timeStampLeft}
            </div>
            <div className='font-bold text-xs'>
            {timeStampRight}
            </div>
          </div>
      </div>
    </Link>
  </div>
  )
}

export default MyCard
