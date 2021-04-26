import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
  <Container>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand style={{margin: "0 auto"}}>
        <h1>꧁Kombucha Corner꧂</h1>
      </Navbar.Brand>
    </Navbar>
  </Container>
  );
}