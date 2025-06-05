import React from "react";
import { motion } from "motion/react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.css";

const {
  introSection,
  introText,
  nameHighlight,
  exploreButton,
  scrollIndicator,
  cursor,
} = styles;

const LandingIntro = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sentence = "Hi, I'm Ahmed Raaft";
  const characters = sentence.split("");

  return (
    <section className={introSection} id="home">
      <Container>
        <motion.div
          className={introText}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <h1>
            {characters.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: `0.25em` },
                  visible: {
                    opacity: 1,
                    y: `0em`,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
                className={nameHighlight}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            Front-End Developer | React Specialist | UI/UX Enthusiast
          </motion.h2>

          <motion.button
            onClick={scrollToAbout}
            className={exploreButton}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            Explore
          </motion.button>
        </motion.div>

        <motion.div
          className={scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToAbout}
        >
          ↓
        </motion.div>
      </Container>
    </section>
  );
};

export default LandingIntro;
