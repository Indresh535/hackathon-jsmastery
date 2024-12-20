
import React from 'react'

const NavigationDots = () => {
  return (
    <div className='app__navigation'>
    {['home', 'about', 'works', 'skills', 'contact'].map((item, index) => (
        
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a 
        href={`#${item}`}
        key={item + index}
        className='app__navigation-dot'
        style={{backgroundColor:'#313BAC'}}
        />
      ))}
    </div>
  )
}

export default NavigationDots
