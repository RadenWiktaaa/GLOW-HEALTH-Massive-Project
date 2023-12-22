import React from 'react'
import './Footer.css'

const Footer = () => {
  return (

    <div className='footer '>
        <div className="container mt-2">
            <div className="rows">
                <div className="footer-col">
                    <h4>Glow Healthy</h4>
                        <li><a href="#">Puskesmas Bayan</a></li>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Read News</a></li>
                </div>
                <div className="footer-col">
                    <h4>Service</h4>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support</a></li>
                </div>
                <div className="footer-col">
                    <h4>Resource</h4>
                        <li><a href="#">FAQ</a></li>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className='social-links'>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div> 
            </div>
            <hr />
              <div class="row">
                <div className="col mt-3">
                   <p className='copyright'>
                    Copyright @{new Date().getFullYear()} Glow Health 
                   </p>
                </div>
             </div>   
        </div>    
    </div>
  
  )
}

export default Footer