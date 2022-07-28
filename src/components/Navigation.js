import React, { useContext } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Context from "../context/Context";



export default function Navigation() {
  const { myBalance } = useContext(Context); 
  return (
    <div>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Balance: {myBalance}$</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className="nav-links" to="/">Vending Machine </Link></Nav.Link>
              <Nav.Link><Link className="nav-links" to="/products">Products </Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
