import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Details from './Pages/Home/Details'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<Details/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}


export default App