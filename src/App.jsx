import React from 'react'
import Nav from './Components/Navigation/Nav'
import Homepage from './Components/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Coinspage from './Components/Coinspage/Coinspage'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='web'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/coins/:coinsid' element={<Coinspage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
