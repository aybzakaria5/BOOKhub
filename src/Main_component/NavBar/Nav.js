import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Nav.module.css'
import logo from "./loggo_.png"
import "bootstrap-icons/font/bootstrap-icons.css";



function OffcanvasExample() {
  const expand = 'lg';

  return (
    <Navbar expand={expand} className="p-4" style={{borderBottom: "1px solid  #f1eee3  "}}>
      <Container fluid>
        

        <Navbar.Brand href="/" className={Style.logo}>
          {/* <img src={logo} alt="" className={Style.logo_image}/>  */}
          Ebook Odc
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={Style.logo}>
              Ebook Odc
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
            <Nav className="justify-content-center flex-grow-1">
              <Nav.Link href="/" className={Style.Link}>Home</Nav.Link>
              <Nav.Link href="/about" className={Style.Link}>About</Nav.Link>
              <Nav.Link href="/catalogue" className={Style.Link}>Shelf</Nav.Link>
              <Nav.Link href="/contact" className={Style.Link}>Contact</Nav.Link>
            </Nav>
            
            <div className={Style.Btn_s}>
              <a href="sign"><Button  className={Style.Btns}>Sign in</Button></a>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
