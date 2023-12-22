import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Items/HeaderFooter/Header'
import Footer from '../../Components/Items/HeaderFooter/Footer'
import { Container, Row, Col, Form,Button  } from 'react-bootstrap'
import Axios from 'axios'

const Register = () => {
  
 
  
  return (

    <>
      <Header/>    
      
          <Container className='mt-5' style={{fontFamily: 'Poppins'}}>
            <Row>
              <Col className="col-lg-4 m-auto ">
                <Form>
                    <div className="input-group mb-2">
                      <span className="input-group-text" style={{background: '#CFCFCF'}} ><i class="fa-solid fa-user"></i></span>
                      <input type="text"className="form-control " style={{background: '#CFCFCF'}}  onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    </div>
                    <div className="input-group mb-2" >
                      <span className="input-group-text" style={{background: '#CFCFCF'}} ><i class="fa-solid fa-envelope"></i></span>
                      <input type="text"className="form-control " style={{background: '#CFCFCF'}}  onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                    </div>
                    <div className="input-group mb-2">
                      <span className="input-group-text" style={{background: '#CFCFCF'}} ><i class="fa-solid fa-lock"></i></span>
                      <input type="phone"className="form-control " style={{background: '#CFCFCF'}}  onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required/>
                    </div>
                    <div className="input-group mb-2">
                      <span className="input-group-text" style={{background: '#CFCFCF'}} ><i class="fa-solid fa-lock"></i></span>
                      <input type="password" className="form-control " style={{background: '#CFCFCF'}}  onChange={(e) => setConfirm_Password(e.target.value)} placeholder="Password" required/>
                    </div>
                      <Form>
                        {['checkbox'].map((type) => (
                          <div key={type} className="mt-5 " style={{fontSize: '13px'}}>
                            <Form.Check type={type} id={`check-api-${type}`}>
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Saya menyetujui syarat & ketentuan yang berlaku`}</Form.Check.Label>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                      <div className='d-grid col-6 mx-auto mb-3'>
                         <Button type="submit" size="md" style={{background: '#CFCFCF', color: 'black'}}>REGISTER</Button>
                      </div>
                      <div className="text-center mb-5" style={{fontSize: '13px'}}>
                        <p>Sudah punya akun ? Silahkan <Link to="/login">Login!</Link></p> 
                      </div>
                </Form>
              </Col>              
            </Row>
          </Container>
      <Footer/>
    </>
  )
}

export default Register







// useEffect(() => {
//   Axios.get('http://localhost:4000/register')
//   .then(result => {
//     console.log('API Success ', result.data)
//   })
//   .catch(Error => {
//     console.log('API failed', Error)
//   })

// }, [])