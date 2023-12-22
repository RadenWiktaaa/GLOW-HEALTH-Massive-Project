import React from 'react'
import Footer from '../../Components/Items/HeaderFooter/Footer'
import { Col, Container, Image, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Queue = () => {
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
                          <Link to="/"><img src="src/assets/image/6.png" alt="" /></Link>
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
          <Container>
                <div className=" col-lg-5 mt-5">
                 <p className="fw-bolder fs-4 mb-2">Formulir Pendaftaran Pasien</p>
                 <p className="text-dark mb-4">Silahkan isi formulir di bawah ini!</p>  
                <form >
                    <div className="mb-2">
                        <label for="nik" class="form-label fw-bolder ">Nama Pasien</label>
                        <input type="text" class="form-control bg-body-secondary" id="nik" placeholder="Nama Pasien"/>
                    </div>
                    <div className="mb-2">
                        <label for="nik" class="form-label fw-bolder ">NIK Pasien</label>
                        <input type="number" class="form-control bg-body-secondary" id="nik" placeholder="NIK Pasien"/>
                    </div>
                    <div class="mb-2">
                        <label for="nomor" class="form-label fw-bolder">No.Hp / Whatsapp</label>
                        <input type="number" class="form-control bg-body-secondary" id="nomor"  placeholder="No.Hp Pasien"/>
                    </div>
                    <div class="mb-2">
                        <label for="pasien" class="form-label fw-bolder">Jenis Pasien</label>
                        <select id="pasien" name="pasien" className="form-select bg-body-secondary">
                          <option value="">Pilih Jenis Pasien</option>
                          <option value="jkn">JKN</option>
                          <option value="non jkn">NON JKN</option>  
                        </select>
                    </div>
                    <div className=" d-grid gap-2 col-4 mt-3 mb-5" >
                        <button type="button" className="bt btn btn-secondary" style={{backgroundColor: '#41C3C3'}}>DAFTAR</button>
                    </div>
                </form>        
            </div>
            
          </Container> 
        <Footer/>
      </>    
    )
}

export default Queue