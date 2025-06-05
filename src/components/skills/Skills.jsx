import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { skillsData } from "./skillsData";

const { skills, container } = styles;

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section className={skills} id="skills">
      <Container>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          style={{ textAlign: "center", color: "#fff", marginBottom: "2rem" }}
        >
          - Skills -
        </motion.h1>
      </Container>

      <Container className={container}>
        {Object.entries(skillsData).map(([key, items]) => (
          <motion.div
            key={key}
            className={styles[key]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            <ul>
              {items.map((skill, i) => (
                <li key={i}>
                  <img src={skill.icon} alt={skill.name} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
