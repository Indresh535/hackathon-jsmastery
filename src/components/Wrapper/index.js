
import React from 'react'
import NavigationDots from './NavigationDots'
import SocialMedia from './SocialMedia'

const Appwrap = ({ children }) =>  {
  return (
    <div className={`app__container `}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'>
      { children }
      <div className='copyright'>
      <p className='p-text'>@2023 Indresh</p>
      <p className='p-text'>All rights reserved</p>
      </div>
      </div>
      <NavigationDots />
    </div>
  )
}

export default Appwrap;