import React from 'react'
import '../style/CardView.css'
import ColoredButton from './ColoredButton'

const CardView = ( {color = 'blue', onClick, text}) => {
  
    const whatsappGroupLink = "https://chat.whatsapp.com/EsyjxiORfor29mBEFBzvio";
  
  return <>
   
   <div className="card">
    <h2>For More Updates Join</h2>

    <div className="card-buttons">
     <ColoredButton text= " Join WhatsApp Group"  color='#00F220' link={whatsappGroupLink}/>
     <ColoredButton text= "Join Telegram Group" onClick = {()=> alert('telegram')} color = '#50C2CF'/>
     
    </div>

   </div>

  
  
  </>
}

export default CardView
