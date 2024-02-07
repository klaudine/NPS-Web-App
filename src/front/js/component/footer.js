import React, {
  useState,
} from 'react';
import "../../styles/footer.css"
import { Button, Form, Modal } from 'react-bootstrap';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false)

  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to parent component
    onSubmit(formData);
    setFormData({ email: "", message: "" });
  };

  return (
    <div>
      <Button onClick={handleShow}>
        <p className="contactBtn">Contact Us</p>
      </Button>

      <Modal className="contact-us" show={showModal}>
        <Form className="formContainer" onSubmit={handleSubmit}>
          <h4>Contact Us</h4>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              placeholder='Ask us a question or suggest something you would like to see on our website!'
              as="textarea"
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="contactButtonContainer">
            <Button
              className="mt-3 submit-btn"
              type="submit"
              onClick={handleClose}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
