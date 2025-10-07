import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import { projectsData } from "./projectsData";

const { projects, card, cardTitle, cardText, cardImg, techList, btn } = styles;

// Animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section className={projects} id="projects">
      <h1>- Projects -</h1>
      <Container>
        <Row className="g-4">
          {projectsData.map((x, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: "0.8" }}
                variants={cardVariants}
              >
                <Card className={card}>
                  <Card.Img variant="top" src={x.image} className={cardImg} />
                  <Card.Body>
                    <Card.Title className={cardTitle}>{x.title}</Card.Title>

                    <ul className={techList}>
                      {x.tech.map((techItem, idx) => (
                        <li key={idx}>{techItem}</li>
                      ))}
                    </ul>

                    <Card.Text className={cardText}>{x.description}</Card.Text>
                    <Button
                      variant="primary"
                      href={x.demo}
                      target="_blank"
                      className={btn}
                    >
                      View Demo
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
