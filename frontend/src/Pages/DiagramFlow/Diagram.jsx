import React, { Component } from "react";
import Chart from "react-apexcharts";
import Card from "react-bootstrap/Card";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/Items/HeaderFooter/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        
        xaxis: {
          categories: ["Anak", "Gizi", "Jantung", "Kandungan", "Tulang"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [3, 2, 3, 3, 5],
        },
      ],
    };
  }

  render() {

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
                      <Link to="/room"><img src="src/assets/image/2.png" alt="" /></Link>
                  </div>
                  <div className="icon">
                     <Link to="/service"><img src="src/assets/image/12.png" alt="" /></Link>
                  </div>
                  <div className="icon">
                      <Link to="#"><img src="src/assets/image/13.png" alt="" /></Link>
                  </div>
            </div>       
        </div>
      </nav>
      <div className="app">
        <Row>
          <h2
            style={{
              marginTop: "100px",
              textAlign: "center",
              color: "#41C3C3",
              marginBottom: "50px",
              fontFamily: 'Poppins'
            }}
          >
            GRAFIK JUMLAH KUNJUNGAN
          </h2>
          <Col style={{ marginLeft: "100px", marginRight: "150px" }}>
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="600"
              />
            </div>
          </Col>
          <Col>
            <Card
              style={{
                width: "15rem",
                backgroundColor: "#41c3c3",
                textAlign: "center",
                fontFamily: 'Poppins'
              }}
            >
              <Card.Body>
                <Card.Title>16</Card.Title>
                <Card.Text>Total Pasien</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "15rem",
                backgroundColor: "#41c3c3",
                marginTop: "50px",
                textAlign: "center",
                fontFamily: 'Poppins'
              }}
            >
              <Card.Body>
                <Card.Title>7</Card.Title>
                <Card.Text>Pasien Laki - Laki</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "15rem",
                backgroundColor: "#41c3c3",
                marginTop: "50px",
                marginBottom: '75px',
                textAlign: "center",
                fontFamily: 'Poppins'
              }}
            >
              <Card.Body>
                <Card.Title>9</Card.Title>
                <Card.Text>Pasien Perempuan</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Footer/>
    </>
    );
  }
}

export default App;
