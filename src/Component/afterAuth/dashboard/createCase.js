import React, { Component } from "react";
import "../../../StylesComponent/afterAuth/dashboard.css";
import { Form, Button, Container, Col } from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import swal from "sweetalert";

class CreateCase extends Component {

  constructor(props) {
    super(props);
  }


  startRegistration = async values => {
    console.log(values);
    const username = localStorage.getItem('username')
    console.log(username);
    const data = {
      details: values,
      creatorUsername: username
    }
    swal({
      text: "Submitting",
      icon: "info",
      button: null
    });
    console.log(JSON.stringify(data));
    fetch(
      "https://cors-anywhere.herokuapp.com/https://cacerem.herokuapp.com/inmate/create",
      {
        body: JSON.stringify(data),
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
          text: "Case created successfully",
          icon: "success",
          button: "View Case"
        }).then(value => {
          this.props.history.push("/cases");
        });
        setTimeout(() => {
          swal.close();
          this.props.history.push("/cases");
        }, 2000);
      })
      .catch(err => {
        console.error(err);
      });
  };
  
  handleSubmit = event => {
    event.preventDefault();

    const inmateDetails = {
      name: this.state.name,
      crimeDescription: this.state.crimeDescription,
      allegedCrime: this.state.allegedCrime,
      inmateStatus: this.state.inmateStatus,
      judgement: this.state.judgement
    };
    const proxy = "https://cors-anywhere.herokuapp.com/";
    axios
      .post(`${proxy}https://cacerem.herokuapp.com/inmate/create`, {
        inmateDetails
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    console.log(this.state);
    console.log(this.state.allegedCrime);
  };
  render() {
    return (
      <div className="create-case">
        <Container className="case-form">
          <Formik
            validation={this.validate}
            onSubmit={values => this.startRegistration(values)}
            initialValues={{
              name: "",
      crimeDescription: "",
      allegedCrime: "PETTY_THEFT",
      inmateStatus: "ARRESTED",
      judgement: "NOT_AVAILABLE"
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
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Inmate Fullname</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Enter inmate fullname"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Alleged Crime</Form.Label>
                    <Form.Control as="select" name="allegedCrime" value={values.allegedCrime} onChange={handleChange}>
                      <option name="petty_theft">PETTY_THEFT</option>
                      <option name="armed_robbery">ARMED_ROBBERY</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Inmate Status</Form.Label>
                    <Form.Control as="select" name="inmateStatus" value={values.inmateStatus} onChange={handleChange}>
                      <option>ARRESTED</option>
                      <option>LAWYER_ASSIGNED</option>
                      <option>COURTDATE_ASSIGNED</option>
                      <option>JUDGED</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Crime Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="crimeDescription"
                    value={values.crimeDescription}
                    onChange={handleChange}
                    placeholder="Enter Crime Descripition"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-case">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    );
  }
}

export default CreateCase;
