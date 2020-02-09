import React from "react";
import "../../../Styles/registration/register.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

const LoginPage = (props) => {
  const startLogin = e => {
    e.preventDefault();
    swal({
      text: "Login successful",
      icon: "success",
      button: "Proceed to Dashboard"
    }).then((value) => {
        props.history.push('/dashboard')
    });
    setTimeout(() => {
        swal.close()
        props.history.push('/dashboard')
    }, 2000);
  };

  return (
    <div className="header">
      <div className="header-bg" id="header-bg-register" />
      <div className="main">
        <h2>Login</h2>
        <br />
        <Form onSubmit={startLogin}>
          <Form.Group controlId="username-email">
            <Form.Label>Username/Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username or email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
