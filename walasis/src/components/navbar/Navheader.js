import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from 'react-bootstrap-icons';
import './Navheader.css'

function Navheader() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary border-bottom">
      <Container fluid>
        <Navbar.Brand href="#"><i className="bi bi-caret-left-square"></i><span className="kaushan-script-regular mx-2">QUIZARD</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-secondary Btn-Preview text-black fw-semibold mx-2"><Icon.CaretRightFill />Preiew</Button>
            <Button variant="outline-success mx-2 Publish-btn text-white">Publish</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navheader;
