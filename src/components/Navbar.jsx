import React from 'react';
import '../style/Navbar.css';



const Navbar = () => {
  return (
  <>
   
  <nav className='navbar'>
   <div className="navdate">
      <p>Posting date and time</p>
   </div>
   <div className="navTitle"></div>
   
    <div className="image-container">
    < img className='background-image' src="navBg.jpg" alt="no imgae" />
      <div className="overlay-text">
      <h3>Job Guarantee.in- Off Campus Job Alert, Off Campus Drive</h3>
     <p className='overlay-text-p'> "Jobs, Trends , Free Courses, Coding Content, and Interview & Resume Tips - All in One</p>
      
      </div>

    </div>
    <div className="navIcon"></div>

   

  </nav>
  
  </>
  )
}

export default Navbar
