import { Navbar, Image, Nav   } from "react-bootstrap"
import './Header.css'

const Header = () => {
    return( 

      <Navbar className="container-fluid p-3 p">
        <Image src="src/assets/image/logo.png" width={100} alt="..."></Image>
       <Nav className="wrapper">
          <div className="brand">
              <div className="firstName">Glow</div>
              <div className="lastName">Health</div>
          </div>  
          
       </Nav>
    </Navbar> 
        
    )
}

export default Header