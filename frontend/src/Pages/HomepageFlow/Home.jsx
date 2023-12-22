import React from 'react'
import { Card, Image, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Items/HeaderFooter/Footer'

const Home = () => {
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
                          <Link to="/Home"><img src="src/assets/image/10.png" alt="" /></Link>
                      </div>
                      <div className="icon">
                          <Link to="/Home"><img src="src/assets/image/9.png" alt="" /></Link>
                      </div>
                      <div className="icon">
                        <Link to="/service"><img src="src/assets/image/7.png" alt="" /></Link>
                      </div>
                      <div className="icon">
                          <Link to="/profile"><img src="src/assets/image/8.png" alt="" /></Link>
                      </div>
                </div>       
            </div>
          </nav>

        <Container className="mt-5 p-2 mb-5" style={{backgroundColor: '#E4FBFB'}}>
            <p >Hai ! Dinda </p>
            <p className="text-warning">Pasien </p>
        </Container>

        <Container>
          <Row className='justify-content-center text-center mb-5 '>
            <div style={{ width: '20rem' }} >
              <a href="room"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/room.png" /></a>
                <Card.Body>
                  <Card.Title>Info Ruangan</Card.Title>
                </Card.Body>
            </div>
            <div style={{ width: '20rem' }}>
              <a href="queue"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/in-queue.png" /></a>
                <Card.Body>
                  <Card.Title>Daftar Antrean</Card.Title>
                </Card.Body>
            </div>
            <div style={{ width: '20rem' }}>
              <a href="card"><Image className='mt-2' variant="top" thumbnail src="src/assets/image/in-queue.png" /></a> 
                <Card.Body>
                  <Card.Title>Status Antrean</Card.Title>
                </Card.Body>
            </div>
            <div style={{ width: '20rem' }}>
              <a href="service"><Image className='mt-4' variant="top" thumbnail src="src/assets/image/schedule.png" /></a>
                <Card.Body>
                  <Card.Title>Pelayanan</Card.Title>
                </Card.Body>
            </div>     
            <div style={{ width: '20rem' }}>
              <a href="grafik"><Image className='mt-4' variant="top" thumbnail src="src/assets/image/record-medic.png" /></a>
                <Card.Body>
                  <Card.Title>Rekam Jejak</Card.Title>
                </Card.Body>
            </div>
          </Row>
        </Container>  
      <Footer/>
    </>
  )
}

export default Home