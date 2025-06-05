import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "motion/react"; // or 'framer-motion'
import styles from "./styles.module.css";

const { about, aboutImg, section, aboutText } = styles;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.8, ease: "easeOut" },
};

const About = () => {
  return (
    <section>
      <motion.div
        className={about}
        id="about"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "0.9" }}
        variants={fadeInUp}
      >
        <Container>
          <section className={section}>
            <div className={aboutImg}>
              <img
                src="https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Wayfarers&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Red&eyeType=Dizzy&eyebrowType=UpDown&mouthType=Serious&skinColor=Light"
                alt="Ahmed Raaft avatar"
              />
              <p>
                “Code is not just code, <br /> it’s a user experience.”
              </p>
            </div>

            <motion.div
              className={aboutText}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h2>I'm Ahmed Raaft, a Front-End Developer</h2>
              <p>
                passionate about building beautiful, responsive, and
                user-friendly web interfaces. I specialize in React and modern
                JavaScript frameworks, with a strong eye for design and user
                experience.
              </p>
              <p>
                Since starting my journey in web development, I've worked on
                various personal and team projects that allowed me to apply what
                I learn and continuously grow. I recently completed a
                professional internship at Max Orbit Education and Training,
                where I gained real-world experience and sharpened my
                development skills in a collaborative environment.
              </p>
              <p>
                I love turning complex problems into elegant solutions through
                clean code and thoughtful UI. I'm always exploring new
                technologies and trends to stay ahead in the fast-evolving web
                world.
              </p>
              <p>
                When I'm not coding, you'll find me reading about UI/UX,
                experimenting with new tools, or sketching out ideas for my next
                project.
              </p>
            </motion.div>
          </section>
        </Container>
      </motion.div>
    </section>
  );
};

export default About;
