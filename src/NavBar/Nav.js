import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Nav.module.css'
import logo from "./logo.jpg"
import "bootstrap-icons/font/bootstrap-icons.css";



function OffcanvasExample() {
  const expand = 'lg';

  return (
    <Navbar expand={expand} className="bg-body-tertiary p-4 ">
      <Container fluid>

        <Navbar.Brand href="#" className={Style.logo}> <img src={logo} alt="" className={Style.logo_image}/> </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              BookHub
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
            <Nav className="justify-content-center flex-grow-1">
              <Nav.Link href="#action1" className={Style.Link}> <i class="bi bi-patch-plus"></i> Add Book</Nav.Link>
              <Nav.Link href="#action2" className={Style.Link}> <i class="bi bi-x-octagon"></i> Delete Book</Nav.Link>
            </Nav>
            
            <Form className={`d-flex ${Style.Search}`}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className={Style.Btn_Search}>Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
