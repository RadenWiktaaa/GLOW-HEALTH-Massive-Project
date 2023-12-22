import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Button, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/Items/HeaderFooter/Footer";

function Infokamar() {
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
                    <Link to="/Home"><img src="src/assets/image/14.png" alt="" /></Link>
                </div>
                <div className="icon">
                   <Link to="/Home"><img src="src/assets/image/12.png" alt="" /></Link>
                </div>
                <div className="icon">
                    <Link to="/Home"><img src="src/assets/image/4.png" alt="" /></Link>
                </div>
          </div>       
      </div>
    </nav>

    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "Center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#41C3C3",
          marginTop: "20px",
        }}
      >
        Kamar Inap
      </h2>

      <Card
        style={{
          width: "50rem",
          backgroundColor: "#EFFAFA",
          marginTop: "50px",
          position: "relative",
        }}
      >
        <Card.Body>
          <div>
            <Image src="src/assets/image/room.png" style={{marginTop: '30px'}} width={320} />
            <h4
              style={{
                position: "absolute",
                top: 0,
                right: 150,
                margin: "20px",
                color: "#F1C644",
              }}
            >
              Kapasitas 6 Pasien
            </h4>
            <h6
              style={{
                position: "absolute",
                top: 50,
                right: 300,
                margin: "20px",
              }}
            >
              Jumlah Ranjang
            </h6>
            <Card
              style={{
                position: "absolute",
                top: 30,
                right: 100,
                margin: "20px",
                background: "#41c3c3",
              }}
            >
              <Card.Body>6</Card.Body>
            </Card>
          </div>

          <div>
            <h6
              style={{
                position: "absolute",
                top: 120,
                right: 350,
                margin: "30px",
              }}
            >
              Terpakai
            </h6>
            <Card
              style={{
                position: "absolute",
                top: 110,
                right: 100,
                margin: "20px",
                background: "#41c3c3",
              }}
            >
              <Card.Body>4</Card.Body>
            </Card>
          </div>

          <div>
            <h6
              style={{
                position: "absolute",
                top: 200,
                right: 360,
                margin: "30px",
              }}
            >
              Kosong
            </h6>
            <Card
              style={{
                position: "absolute",
                top: 190,
                right: 100,
                margin: "20px",
                background: "#41c3c3",
              }}
            >
              <Card.Body>2</Card.Body>
            </Card>
          </div>

          <Col
            xs=""
            className="text-center"
            style={{
              margin: "20px",
            }}
          >
          
          </Col>
        </Card.Body>
      </Card>
      <br /><br /> <br /> <br />
    </div>
    <Footer/>

    </>
  );
}

export default Infokamar;
