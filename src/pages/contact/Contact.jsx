import React, { useCallback, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const api_key = import.meta.env.VITE_EMAILJS_API_KEY;
const servicesID = import.meta.env.VITE_EMAILJS_SERVICES_ID;
const tempID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const { contactForm } = styles;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  // to handle email js for the form submitting
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validationForm = () => {
    const { firstName, secondName, email, number } = formData;
    if (firstName.trim().length < 5)
      return "First name must be at least 5 characters";
    if (secondName.trim().length < 5)
      return "Second name must be at least 5 characters";

    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid email address";

    if (!number) return "Mobile number is required";
    if (isNaN(number) || number.length !== 10)
      return "Please enter a valid 10-digit mobile number";

    return null;
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      toast.dismiss();
      const error = validationForm();
      if (error) {
        toast.error(error);
        return;
      }
      // after validation
      emailjs
        .sendForm(servicesID, tempID, form.current, {
          publicKey: api_key,
        })
        .then(
          () => {
            toast.success("Message sent successfully!");
            setFormData({
              firstName: "",
              secondName: "",
              email: "",
              number: "",
            });
          },
          (error) => {
            toast.error("Failed to send. Please try again.");
          }
        );
    },
    [formData]
  );

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ duration: 7000 }}
        reverseOrder={false}
      />

      <section id="contact">
        <motion.div
          className={contactForm}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1 variants={itemVariants} className="text-center mb-4">
            - Contact -
          </motion.h1>

          <Form onSubmit={handleSubmit} ref={form}>
            {/* First name */}
            <motion.div variants={itemVariants}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </Form.Group>
            </motion.div>

            {/* Second name */}
            <motion.div variants={itemVariants}>
              <Form.Group className="mb-3" controlId="formSecondName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                  type="text"
                  name="secondName"
                  placeholder="Second Name"
                  onChange={handleChange}
                  value={formData.secondName}
                  required
                />
              </Form.Group>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </Form.Group>
            </motion.div>

            {/* Mobile number */}
            <motion.div variants={itemVariants}>
              <Form.Group className="mb-3" controlId="formMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  placeholder="Mobile number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </motion.div>
          </Form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
