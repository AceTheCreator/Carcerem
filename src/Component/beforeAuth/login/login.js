import React from "react";
import "../../../Styles/login/login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import { Formik } from "formik";

class LoginPage extends React.Component {
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

  startLogin = async values => {
    swal({
      text: "Submitting",
      icon: "info",
      button: null
    });
    console.log(JSON.stringify(values));
    fetch(
      "https://cors-anywhere.herokuapp.com/https://cacerem.herokuapp.com/user/login_user",
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
        console.log(data.accountUser.id);
        swal({
          text: "Login successful",
          icon: "success",
          button: "Proceed to Dashboard"
        }).then(value => {
          this.props.history.push({
            pathname: "/dashboard",
            state: { userId: data.accountUser.id }
          });
        });
        setTimeout(() => {
          swal.close();
          this.props.history.push({
            pathname: "/dashboard",
            state: { userId: data.accountUser.id }
          });
        }, 2000);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="header">
        <div className="header-bg" id="header-bg-login" />
        <div className="main">
          <div className="content">
            <h2 className="title">Login</h2>
            <br />
            <Formik
              validation={this.validate}
              onSubmit={values => this.startLogin(values)}
              initialValues={{
                username: "",
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
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                      name="username"
                      value={values.username}
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
                    Login
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

export default LoginPage;
