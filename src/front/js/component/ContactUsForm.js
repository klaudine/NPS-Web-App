// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import '../../styles/contactus.css';

// export const ContactUsForm = ({ onSubmit }) => {

//   const [formData, setFormData] = useState({
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Pass form data to parent component
//     onSubmit(formData);
//     setFormData({ email: "", message: "" })
//   };

//   return (
//     <div className='contactUs'>
//     <Form className="formContainer" onSubmit={handleSubmit}>
//     <h4>Contact Us</h4>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control 
//           type="email" 
//           placeholder="name@example.com" 
//           name="email" 
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Your message</Form.Label>
//         <Form.Control 
//           as="textarea" 
//           rows={6} 
//           name="message" 
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <div className="contactButtonContainer">
//       <Button
//         className="mt-3 submit-btn"
//         type="submit"
//         >
//         Submit
//       </Button>
//       </div>
//     </Form>
//     </div>
//   );
// }