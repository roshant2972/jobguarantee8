import React from 'react'
import Navbar from './Navbar'
import Adds from './Adds'
import CardView from './CardView'
import Footer from './Footer'

import JobList from './JobList'


const Main = () => {
  return (
    <>
    <Navbar/>
    <Adds/>
    <CardView/>
    {/*Add the job lists here   */}
    <JobList/>
    
    <Footer/>


    
    </>
  )
}

export default Main
