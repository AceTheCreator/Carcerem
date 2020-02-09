import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';

class Case extends Component {
    state={
        data: null

    }
    componentDidMount(){
        this.getDataAxios()
    }
    async getDataAxios(){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const response =
          await axios.get(`${proxy}https://cacerem.herokuapp.com/inmate/get_inmate?inmateId=5`)
          this.setState({
              data: response.data
          })
        console.log(this.state.data)
    }
   render(){
    return(
      <Container>
           <div className='case-details'>
           <h3>Case Details</h3>
           <div className='case-content'>
               <div className='case-status'>
               <h6>Status : <span>Active</span></h6>
               </div>
               <div className='case-owner'>
    <h6>Name: <span></span></h6>
                   <h6>Case ID: <span>cdca0aa2c68290eb41f7d3e77f6669c6</span></h6>
                   <h6>Case Description: <span>Lorem Ipsum</span></h6>
               </div>

           </div>
           </div>
      </Container>
    )
   }
}

export default Case;