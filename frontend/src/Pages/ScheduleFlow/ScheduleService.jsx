import React from 'react'
import { useState, useEffect } from 'react'
import {Container, Row, Image, Card} from 'react-bootstrap'
import Header1 from '../../Components/Items/HeaderFooter/Header1'
import Footer from '../../Components/Items/HeaderFooter/Footer'
import { Link } from 'react-router-dom'
import './Schedule.css'


const ScheduleService = () => {

  return(
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
                   <Link to="/room"><img src="src/assets/image/2.png" alt="" /></Link>
                </div>
                <div className="icon">
                   <Link to="#"><img src="src/assets/image/3.png" alt="" /></Link>
                </div>
                <div className="icon">
                   <Link to="/grafik"><img src="src/assets/image/4.png" alt="" /></Link>
                </div>
              </div>       
          </div>
        </nav>


      <Container className='service-schedule text-center mt-5 mb-4'>
        <h2 className='p-4'>PELAYANAN PUSKESMAS BAYAN</h2>
        
        <Row className='justify-content-center text-center mb-5 '>
            <div style={{ width: '10rem' }} >
              <a href="#"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/doct.jpg" /></a>
                <Card.Body>
                  <h6>Pemeriksaan Umum</h6>
                </Card.Body>
            </div>
            <div style={{ width: '10rem' }}>
              <a href="#"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/immunization.jpg" /></a> 
                <Card.Body>
                <h6>Imunisasi</h6>                
                </Card.Body>
            </div>
            <div style={{ width: '10rem' }}>
              <a href="#"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/poly.jpg" /></a>
                <Card.Body>
                <h6>Poly ibu & anak</h6>
                </Card.Body>
            </div>
            <div style={{ width: '10rem' }}>
              <a href="#"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/posyandu.jpg" /></a>
                <Card.Body>
                <h6>Posyandu</h6>
                </Card.Body>
            </div>
            <div style={{ width: '10rem' }}>
              <a href="#"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/poly gigi.jpg" /></a>
                <Card.Body>
                <h6>Poly Gigi</h6>
                </Card.Body>
            </div>
            <div style={{ width: '10rem' }}>
              <a href="#"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/vaccine.jpg" /></a>
                <Card.Body>
                <h6>Vaksinasi</h6>
                </Card.Body>
            </div>
          </Row>   
        
        
      </Container>

      <Container>
        <div className="box1 text-center justify-content-center align-items-center" style={{color: '#000047', marginLeft: '0'}}>
           <h4>JADWAL DOKTER </h4>
        </div>
      </Container>

       <div className="container">
        <div class="row">
          <div class="col-sm-4 mb-3 mb-sm-0 mt-2">
            <div class="card " style={{background: '#F5F5F5'}}>
              <div class="card-body col-sm-10">
                <h5 class="card-title">Senin</h5> <hr />
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >09:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >10:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >11:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >12:10</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >13:50</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-2">
            <div class="card" style={{background: '#F5F5F5'}}>
              <div class="card-body col-sm-10 ">
                <h5 class="card-title">Selasa</h5><hr />
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-2">
            <div class="card" style={{background: '#F5F5F5'}}>
              <div class="card-body col-sm-10">
                <h5 class="card-title">Rabu</h5><hr />
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-4">
            <div class="card" style={{background: '#F5F5F5'}}>
              <div class="card-body col-sm-10">
                <h5 class="card-title">Kamis</h5><hr />
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-4 mb-5">
            <div class="card" style={{background: '#F5F5F5'}}>
              <div class="card-body col-sm-10">
                <h5 class="card-title">Jumat</h5><hr />
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#8A8A8A'}} >08:00</a>
                <a href="#"  className="m-1 btn " style={{background: '#0AA3A3'}} >08:00</a>
              </div>
            </div>
          </div>
        </div>
       </div>     

    <Footer/>
    </>
  )
}


  
export default ScheduleService

    

     