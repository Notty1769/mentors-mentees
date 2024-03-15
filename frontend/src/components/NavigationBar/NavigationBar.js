import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  const navbarStyles = {
    paddingLeft: "3rem",
    paddingRight: "3rem",
  };

  const btnStyles = {
    marginLeft: "3rem",
    display: "flex",
    gap: "10px",
  };

  return (
    <div>
      {/* Navbar for larger devices */}

      <Navbar bg="light" expand="md" style={navbarStyles} id="lgNavBar">
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        <Nav style={{ marginRight: "auto" }}>
          <Nav.Link href="#home">Explore Mentors</Nav.Link>
          <Nav.Link href="#home">Live Webinars</Nav.Link>
          <Nav.Link href="#home">Ask Mentor Anything</Nav.Link>
          <Nav.Link href="#home">Blogs</Nav.Link>
          <Nav.Link href="#home">Pro Pilot</Nav.Link>
        </Nav>
        <Nav style={btnStyles}>
          <Button variant="outline-secondary">Dashboard</Button>
          <Button variant="primary">Find your mentor</Button>
        </Nav>
      </Navbar>

      {/* Navbar for smaller devices */}
      <Navbar
        bg="primary"
        expand="md"
        className="d-md-none fixed-bottom "
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Nav.Link href="#home">Mentors</Nav.Link>

        <Nav.Link href="#home">Live Events</Nav.Link>
        <Nav.Link href="#home">ProPilot</Nav.Link>
        <Nav.Link href="#home">Stories</Nav.Link>
        <Nav.Link href="#home">Dashboard</Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
