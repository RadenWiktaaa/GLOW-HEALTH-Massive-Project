import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react"
import Landingpage from './Pages/LandingPageFlow/Landingpage'
import Login from './Pages/LoginFlow/Login'
import Register from './Pages/LoginFlow/Register'
import Home from './Pages/HomepageFlow/Home'
import Profile from './Pages/ProfileFlow/Profile'
import Queue from './Pages/QueueList/Queue'
import ScheduleService from './Pages/ScheduleFlow/ScheduleService'
import Card from './Pages/CardFlow/Card'
import Diagram from './Pages/DiagramFlow/Diagram'
import Header1 from './Components/Items/HeaderFooter/Header1'
import Kamar from './Pages/RoomFlow/Kamar'

const App = () => {
  return (
     <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/room' element={<Kamar/>} />
          <Route path='/queue' element={<Queue/>} />
          <Route path='/card' element={<Card/>} />
          <Route path='/service' element={<ScheduleService/>} />
          <Route path='/grafik' element={<Diagram/>} />
        </Routes>
      </Router>
  )
}

export default App
