import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/Items/HeaderFooter/Footer";

function Status() {
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
                        <Link to="/Home"><img src="src/assets/image/6.png" alt="" /></Link>
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


    <div
      style={{
        margin: "100px",
        marginBottom: '150px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: 'Poppins'
      }}
    >
      <h3>Cek Status Antrean</h3>
      <p className="fs-5">Silahkan lakukan pengecekan antrean dengan memasukan kode!</p>
      <Card style={{ width: "50rem", backgroundColor: "#EFFAFA" }}>
        <Card.Body>
          <Card.Title className="text-center">Kode Pemesanan</Card.Title>
          <Form inline>
            <Row>
              <Col xs="10" className="text-center">
                <Form.Control
                  type="text"
                  placeholder="Kode Pemesanan Antrean"
                  className="mx-4"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" size="md" className=" mx-1" style={{background: '#41C3C3'}}>
                  <a href="service">Cek</a> 
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>

    <Footer/>  
    </>
  )
}

export default Status;
