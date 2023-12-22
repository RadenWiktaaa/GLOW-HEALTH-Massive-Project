import React, { useState } from 'react'
import Footer from '../../Components/Items/HeaderFooter/Footer'
import {Container, Form, Col, Row, Image, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {

  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  consgt [pendidikan, setPendidikan] = useState('')
  consgt [jenis_kelamin, setJenis_kelamin] = useState('')

  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/addUser', {
        username,
        email,
      });

      console.log('User added successfully');
      // Handle success, e.g., display a success message or redirect
    } catch (error) {
      console.error('Error adding user:', error.message);
      // Handle error, e.g., display an error message
    }
  };

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
                        <Link to="/Home"><img src="src/assets/image/5.png" alt="" /></Link>
                    </div>
                    <div className="icon">
                        <Link to=""><img src="src/assets/image/9.png" alt="" /></Link>
                    </div>
                    <div className="icon">
                        <Link to=""><img src="src/assets/image/7.png" alt="" /></Link>
                    </div>
                    <div className="icon">
                        <Link to=""><img src="src/assets/image/11.png" alt="" /></Link>
                    </div>
              </div>       
          </div>
        </nav>  
      <Container className=' text-center' style={{fontFamily:'Poppins', margin: '120px' }} >
        <Row>
          <Col >
            <Image src='src/assets/image/profile.png' width={250} ></Image>
            <Card.Title className='mt-3'>Tay Vachirawit</Card.Title>
          </Col>
          <Col>  

            <Form>
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="3">Nama</Form.Label>
                <Col sm="5">
                  <Form.Control onChange={(e) => setNama(e.target.value)} />
                </Col>
              </Form.Group>
              <hr />
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="3">Alamat</Form.Label>
                <Col sm="5">
                  <Form.Control onChange={(e) => setAlamat(e.target.value)} />
                </Col>
              </Form.Group>
              <hr />
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="3">Pendidikan</Form.Label>
                <Col sm="5">
                  <Form.Control onChange={(e) => setPendidikan(e.target.value)} />
                </Col>
              </Form.Group>
              <hr />
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="3">Jenis Kelamin</Form.Label>
                <Col sm="5">
                  <Form.Control onChange={(e) => setJenis_kelamin(e.target.value)} />
                </Col>
              </Form.Group>
              <hr />          
              <Button  className=" rounded mt-3" type="submit" size="lg" style={{background: '#CFCFCF', color: 'black'}}>Edit User</Button>
            </Form>

          </Col>
        </Row>
      </Container>
    <Footer/>     
    </>
  )
}



export default Profile