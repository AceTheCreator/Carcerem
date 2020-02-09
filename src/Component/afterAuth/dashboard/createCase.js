import React,{Component} from 'react';
import '../../../StylesComponent/afterAuth/dashboard.css'
import {Form, Button, Container, Col,} from 'react-bootstrap';
import axios from 'axios';

class CreateCase extends Component{
    state = {
        name : "",
        crimeDescription: "",
        allegedCrime : "",
        inmateStatus : "",
      creatorUsername : "ayodoe",

    }

    handleChange = (event) => {
        this.setState({ 
           [event.target.name] : event.target.value
         });
      }
   
    
      handleSubmit = event => {
        event.preventDefault();
    
        const inmateDetails = {
          name: this.state.name,
          crimeDescription:this.state.crimeDescription,
          allegedCrime:this.state.allegedCrime,
          inmateStatus:this.state.inmateStatus,
          judgement:this.state.judgement,
        };
        const proxy = "https://cors-anywhere.herokuapp.com/";
        axios.post(`${proxy}https://cacerem.herokuapp.com/inmate/create`, { inmateDetails })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          console.log(this.state)
          console.log(this.state.allegedCrime)
      }
    render(){
        return(
            <div className='create-case'>
              <Container className='case-form'>
              <Form onSubmit={this.handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Inmate Fullname</Form.Label>
      <Form.Control type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder="Enter  inmate fullname" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Alleged Crime</Form.Label>
      <Form.Control as="select">
        <option name='petty_theft'>PETTY_THEFT</option>
        <option name='armed_robbery'>ARMED_ROBBERY</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Inmate Status</Form.Label>
      <Form.Control as="select">
        <option>ARRESTED</option>
        <option>LAWYER_ASSIGNED</option>
        <option>COURTDATE_ASSIGNED</option>
        <option>JUDGED</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} hidden controlId="formGridState">
      <Form.Label>Is Inmate Judged ?</Form.Label>
      <Form.Control as="select">
        <option>Judged</option>
        <option>Not Judged</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Crime Description</Form.Label>
    <Form.Control type="text" placeholder="Enter Crime Descripition" />
  </Form.Group>

  <Button variant="primary" type="submit" className='submit-case'>
    Submit
  </Button>
</Form>
              </Container>
            </div>
        )
    }
}

export default CreateCase;