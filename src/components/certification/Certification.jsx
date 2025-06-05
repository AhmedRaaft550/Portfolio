import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const certifications = [
  {
    title: "American Board of Professional Studies Certification",
    year: "2024",
  },
  {
    title: "Egyptian Science House Certification",
  },
  {
    title: "Orbit Full Stack Certification",
    location: "Issued in Dubai",
  },
  {
    title: "Internship",
    company: "Max Orbit Education and Training Computer Software LLC",
    details: "Completed Internship Program",
  },
];

const Certification = () => {
  return (
    <section className={styles.container}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        - Certifications & Internship -
      </motion.h2>

      <motion.ul
        className={styles.list}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {certifications.map(({ title, company, details }, index) => (
          <motion.li
            key={index}
            className={styles.item}
            variants={itemVariants}
          >
            <h3 className={styles.title}>{title}</h3>

            {company && <p className={styles.meta}>Company : {company}</p>}
            {details && <p className={styles.meta}>{details}</p>}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Certification;
