import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.name && formData.email && formData.message) {
      try {
        await axios.post("https://mi-servidor-api.com/contacto", formData);
        alert("El mensaje ha sido enviado exitosamente.");
        setFormData({ name: "", email: "", message: "" });
        setFormSubmitted(true);
      } catch (error) {
        console.error(error);
        alert("Ha ocurrido un error al enviar el mensaje.");
      }
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Introduce tu nombre"
          required
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Introduce tu email"
          required
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Dejanos tu mensaje"
          required
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit" disabled={formSubmitted}>
        {formSubmitted ? "Enviado" : "Enviar"}
      </Button>
    </Form>
  );
}

export default ContactForm;
