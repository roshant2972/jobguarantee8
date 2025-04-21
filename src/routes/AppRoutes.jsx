import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path= '/' element ={<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        
    </Routes>
  )
}

export default AppRoutes
