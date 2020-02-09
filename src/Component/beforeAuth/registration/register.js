import React from "react";
import "../../../Styles/registration/register.css";
import default_profile_pic from "../../../images/default_profile_pic.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import { Formik } from "formik";

class RegistrationPage extends React.Component {
  state = {};
  // Synchronous validation
  validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    //...

    return errors;
  };

  startRegistration = async values => {
    console.log(values);
    swal({
      text: "Submitting",
      icon: "info",
      button: null
    });
    console.log(JSON.stringify(values));
    fetch("https://cors-anywhere.herokuapp.com/https://cacerem.herokuapp.com/user/register", {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        swal({
          title: "Registration Complete",
          text: "Welcome to Carcerem!",
          icon: "success",
          button: "Proceed to Dashboard"
        }).then(value => {
          this.props.history.push("/login");
        });
        setTimeout(() => {
          swal.close();
          this.props.history.push("/login");
        }, 2000);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="header">
        <div className="header-bg" id="header-bg-register" />
        <div className="main">
          <div className="content">
            <h2 className="title">Register</h2>
            <br />
            <Formik
              validation={this.validate}
              onSubmit={values => this.startRegistration(values)}
              initialValues={{
                name: "",
                username: "",
                email: "",
                mobileNumber: "",
                address: "",
                password: ""
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                isSubmitting,
                errors
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your preferred username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="mobileNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your phone number"
                      name="mobileNumber"
                      value={values.mobileNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      /* <div className="wrapper">
          <div className="main">
            <div id="profile_picture">
              <img
                id="profile_picture_img"
                src={default_profile_pic}
                alt="profile_picture"
                onClick={launchProfilePicturePicker}
              />
              <input
                type="file"
                id="image_picker"
                accept=".jpg, .jpeg, .png"
                onChange={updateProfilePicture}
              />
              <h2 className="heading" id="student_name">
                Upload Profile Picture
              </h2>
            </div>
    
            <div id="content">
              <Form onSubmit={startRegistration}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
    
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your preferred username"
                  />
                </Form.Group>
    
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
    
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
    
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
    
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full address" />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div> */
    );
  }
}

export default RegistrationPage;
