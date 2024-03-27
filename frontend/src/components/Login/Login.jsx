import React, { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import CompanyLogo from "../../images/preplaced_logo.jpeg";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as submitting it to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      phoneNumber: "",
    });
  };

  const testimonies = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec sem vitae nunc dictum suscipit.",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="formSection col-md-7 px-5">
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <img
                  src={CompanyLogo}
                  alt="not working"
                  style={{ height: "50px", width: "50px" }}
                />
                <h2>Sign in to get Started</h2>
                <p>
                  Begin your journey to your dream job with mentors who are
                  among the top 1% in the tech industry.
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-flex  justify-content-center align-items-center mt-3">
                  <Button variant="primary" type="submit" className="w-100">
                    Send OTP
                  </Button>
                </div>

                <div className="d-flex  justify-content-center align-items-center mt-3">
                  <p>OR</p>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                  <div className="w-100">
                    <Button
                      variant="danger"
                      href="/google-login"
                      className="w-100"
                    >
                      Login with Google
                    </Button>
                  </div>
                  <div className="mt-3 w-100">
                    <Button
                      variant="secondary"
                      href="/email-login"
                      className="w-100"
                    >
                      Login with Email
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="testimonialSection col-md-5">
              <Card>
                <Card.Body>
                  <Card.Title>Testimonial</Card.Title>
                  {testimonies.map((testimony) => (
                    <Card.Text key={testimony.id}>{testimony.text}</Card.Text>
                  ))}
                </Card.Body>
              </Card>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
