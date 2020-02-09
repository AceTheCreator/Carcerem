import React, {Component} from 'react';
import '../../../StylesComponent/afterAuth/dashboard.css';
import {Dropdown, Button, Table, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Cases extends Component{
    render(){
        return(
            <div className='cases'>
                <Container>
<div className='cases-list'>
<div class="cases-list-header">
    <h4 class="title">Cases results for you</h4>
                     <div className='case-filter'>
                    <div className='filter'>
                     <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" className='filter'>
    All Categories <span></span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                    </div>
                    <div className='add-new-case'>
                       <Link to ='/create-case'><Button>Add new case</Button></Link>
                    </div>
                </div>
    </div>
    <Table striped hover size="sm">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>City</th>
      <th>inmate Status</th>
      <th>Crime Description</th>
      <th>alleged crime</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Stealing</td>
      <td>Worin</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Stealing</td>
      <td>Worin</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>Stealing</td>
      <td>Worin</td>
    </tr>
    
  </tbody>
</Table>
</div>
                </Container>
            </div>
        )
    }
}

// POst A Case



export default Cases;