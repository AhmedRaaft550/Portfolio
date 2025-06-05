import React from "react";
import { Badge, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { title, myNav, links } = styles;

const NavBar = () => {
  return (
    <>
      <Navbar className={myNav} data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className={title}>
            Ahmed Raaft
          </Navbar.Brand>
          <Nav className={links}>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <NavLink href="#projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink href="#contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
