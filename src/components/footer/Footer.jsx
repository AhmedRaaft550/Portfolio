import React from "react";
import styles from "./styles.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Container } from "react-bootstrap";

const { footer, footerContainer, col, socials, bottom } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <Container>
        <div className={footerContainer}>
          <div className={col}>
            <h3>Ahmed Raaft</h3>
            <p>Front-End Developer</p>
            <p>Creating modern, accessible web experiences.</p>
          </div>
          <div className={col}>
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
          <div className={col}>
            <h4>Contact</h4>
            <div className={socials}>
              <a
                href="ahmed.raaft250@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/AhmedRaaft550"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-raaft-6517b6337/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={bottom}>
          <p>© {new Date().getFullYear()} Ahmed Raaft. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
