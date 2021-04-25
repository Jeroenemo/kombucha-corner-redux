import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
  <Navbar expand="lg" variant="dark" bg="dark">
    <Navbar.Brand href="#">Kombucha Corner</Navbar.Brand>
  </Navbar>
</Container>
  );
}