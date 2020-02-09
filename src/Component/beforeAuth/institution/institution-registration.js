import React from "react";
import "../../../Styles/registration/register.css";
import default_profile_pic from "../../../images/default_profile_pic.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import { Formik } from "formik";

class InstitutionRegistration extends React.Component {
  constructor(props) {
      super(props);
  }
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
    fetch(
      "https://cors-anywhere.herokuapp.com/https://cacerem.herokuapp.com/lawyer/create",
      {
        body: JSON.stringify(values),
        method: "POST",
        headers: {
          "content-type": "application/json"
        }
      }
    )
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
            <h2 className="title">Register as a Lawyer/Legal Institution</h2>
            <br />
            <Formik
              validation={this.validate}
              onSubmit={values => this.startRegistration(values)}
              initialValues={{
                name: "",
                email: "",
                mobileNumber: "",
                crimeInterest: "PETTY_THEFT"
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

                  <Form.Group controlId="crimeInterest">
                    <Form.Label>Crime Interest</Form.Label>
                    <Form.Control
                      as="select"
                      name="crimeInterest"
                      value={values.crimeInterest}
                      onChange={handleChange}
                    >
                      <option>Choose...</option>
                      <option>PETTY_THEFT</option>
                      <option>ARMED_ROBBERY</option>
                    </Form.Control>
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
    );
  }
}

export default InstitutionRegistration;
