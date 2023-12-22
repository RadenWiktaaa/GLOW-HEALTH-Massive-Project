import React from 'react'
import { Navbar,  Image, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header1.css'


const Header1 = () => {
  return (
    <>
    <nav class="navbar bar">
      <div class="container-fluid">
        <div class="navbar-brand p-2">
        <Image src="src/assets/image/logo.png" width={100} alt="..."></Image>
          <strong>Glow</strong> <span>Health</span> 
        </div>  
          <div className='d-flex'>
                <div className="icon">
                    <Link to="/Home"><img src="src/assets/image/1.png" alt="" /></Link>
                </div>
                <div className="icon">
                    <Link to="/Home"><img src="src/assets/image/2.png" alt="" /></Link>
                </div>
                <div className="icon">
                   <Link to="/Home"><img src="src/assets/image/3.png" alt="" /></Link>
                </div>
                <div className="icon">
                    <Link to="/Home"><img src="src/assets/image/4.png" alt="" /></Link>
                </div>
          </div>       
      </div>
    </nav>
    
    </>
  )
}

export default Header1

