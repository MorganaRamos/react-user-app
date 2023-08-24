import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'


export const Menu = () => {
  return (
    <>
    <div>
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/home">UserApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/usuarios">Usuários</Nav.Link>
          <Nav.Link href="/contato">Contato</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
    
  </>
  )
}
