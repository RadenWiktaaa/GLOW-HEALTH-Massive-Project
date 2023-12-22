import React from "react"
import '../LoginFlow/Login.css'
import { Link } from 'react-router-dom'
import Header from "../../Components/Items/HeaderFooter/Header"
import Footer from "../../Components/Items/HeaderFooter/Footer";
import { Container, Row, Col, Image, Form, Button, FormText} from "react-bootstrap";
import { useState } from 'react'
import { Axios } from "axios";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Axios.post('http://localhost:4000/login', { email, password });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
  <>
    <Header/>
    <Container style={{fontFamily:'Poppins', margin: '140px' }}>
      <Row >
        <Col>
          <Image src="src/assets/image/hero.png" width={500}></Image>
        </Col>   
        <Col className="rounded" style={{backgroundColor: '#44C7C7'}}>
          <Form >
            <h4 className="text-center">Login Account</h4>
            <Form.Label>Username</Form.Label>
              <Form.Control style={{background: '#CFCFCF'}} type="text" name="username" className="mb-2" onChange={(e) =>setEmail(e.target.value)} required/>
              <Form.Label>Password</Form.Label>
              <Form.Control style={{background: '#CFCFCF'}}  type="text" name="password" className="mb-3" onChange={(e) => setPassword(e.target.value)} required/>
            <FormText >Belum punya akun? <Link to="/register">Daftar</Link></FormText>
            <br />
            <Button onClick={handleLogin}  className="w-50 rounded mt-3" type="submit" size="sm" style={{background: '#CFCFCF', color: 'black'}}>Login</Button>
          </Form>
        </Col>
      </Row>                                       
    </Container>
    <Footer/>
  </>
  )
}

export default Login;



  
