import React from "react";
import Footer from "../../Components/Items/HeaderFooter/Footer";
import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

function Landingpage() {
  return (
    <>

      <nav class="navbar bar">
            <div class="container-fluid">
              <div class="navbar-brand p-2">
              <Image src="src/assets/image/logo.png" width={100} alt="..."></Image>
                <strong>Glow</strong> <span>Health</span> 
              </div>  
                <div className='d-flex'>
                      <div className='d-grid col-6 mx-auto mb-3'>
                         <Button type="submit" size="md" style={{background: '#D9D9D9', color: 'black'}}>
                          <Link to="register">REGISTER</Link> </Button>
                      </div>
                      <div className='d-grid col-6 mx-auto mb-3'>
                         <Button type="submit" size="md" style={{background: '#D9D9D9', color: 'black', marginLeft: '20px'}}> <a href="login">LOGIN</a> </Button>
                      </div>
                      
                </div>       
            </div>
      </nav>


    <div>
      <div>
        <img src="src/assets/image/land.png" className="mb-5" />
      </div>
      <div className="d-flex align-items-center mt-3 mx-5">
        <img src="src/assets/image/maps.png" width={600}  style={{marginBottom: '80px', borderRadius: '1rem'}} />
        <div style={{ marginLeft: "30px" }}>
          <h5>Selamat Datang di Puskesmas Bayan</h5>
          <p>Kami melayani dengan Sepenuh Hati,</p>
          
          Puskesmas Bayan merupakan Puskesmas yang <br /> terletak di daerah Bayan, Lombok Utara.
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="src/assets/image/Vector.png" alt=".." />
            <p style={{ marginTop: "20px", marginLeft: "10px" }}>IGD 24 Jam</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="src/assets/image/Vector.png" alt=".." />
            <p style={{ marginTop: "20px", marginLeft: "10px" }}>Pelayanan Rawat Jalan
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="src/assets/image/Vector.png" alt=".." />
            <p style={{ marginTop: "20px", marginLeft: "10px" }}>Pelayanan Penunjang
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Landingpage;
