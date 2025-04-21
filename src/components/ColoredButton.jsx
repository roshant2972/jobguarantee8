import React from 'react'

const ColoredButton = ({text, onClick , color = 'blue', link}) => {
  return (
    <a href={link} 
      target='_blank'
      
    >

    
    <button className='button' onClick={onClick} style={{background: color}}>
        
    {text}

    </button>
    </a>
  )
}

export default ColoredButton
