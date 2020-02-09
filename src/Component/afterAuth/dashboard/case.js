import React, {Component} from 'react';
import {Container, Button, Modal} from 'react-bootstrap';
import axios from 'axios';

class Case extends Component {
    state={
        data: [],
        lawyer: false

    }
    componentDidMount(){
        this.getDataAxios()
    }
    async getDataAxios(){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const id = localStorage.getItem('case');
        const response =
          await axios.get(`${proxy}https://cacerem.herokuapp.com/inmate/get_inmate?inmateId=${id}`)
          this.setState({
              data: response.data
          })
        console.log(this.state.data.name)
        console.log(response.data)
    }
    OnGetALawyerClick = () => {
        // this.getALawyer()
        this.setState({
            lawyer: true
        })
    }
     getALawyer = event =>{
    const inmateDetails = {
        details:{
            id: this.state.data.id
        }
    }

       const proxy = "https://cors-anywhere.herokuapp.com/";
       const response = axios.post(`${proxy}https://cacerem.herokuapp.com/inmate/assign_lawyer`, { inmateDetails })
       .then(res => {
         console.log(response);
         console.log(res.data);
       })
    }
    
   render(){

    return(
      <Container>
           <div className='case-details'>
           <h3>Case Details</h3>
           <div className='case-content'>
               <div className='case-status'>
               </div>
               <div className='case-owner'>
    <h6>Name: <span>{this.state.data.name}</span></h6>
                   <h6>Case ID: <span>cdca0aa2c68290eb41f7d3e77f6669c6</span></h6>
                   <h6>Alleged Crime: <span>{this.state.data.allegedCrime}</span></h6>
    <h6>Case Description: <span>{this.state.data.crimeDescription}</span></h6>
    <h6>Inmate Status : <span>{this.state.data.inmateStatus}</span></h6>
               </div>

               <div className='get-a-lawyer'>
                   <Button type='submit' onClick={this.OnGetALawyerClick}>Get a lawyer</Button>
                   {this.state.lawyer && <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Lawyer</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>A lawyer, Omoboriola, with the number, 08107441596 has been assigned to you
    </p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
  </Modal.Footer>
</Modal.Dialog>}
                   </div>

           </div>
           </div>
      </Container>
    )
   }
}

export default Case;