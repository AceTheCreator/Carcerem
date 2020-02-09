import React, { Component } from "react";
import "../../../StylesComponent/afterAuth/dashboard.css";
import { Dropdown, Button, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Cases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      userId: 1
    };
    this.launchCase = this.launchCase.bind(this);
  }

  componentDidMount() {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    this.setState((state, props) => ({
      userId: userId
    }));
    fetch(
      `https://cors-anywhere.herokuapp.com/https://cacerem.herokuapp.com/user/cases?userId=${this.state.userId}`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          cases: data.inmateList
        });
        console.log(this.state);
      })
      .catch(err => console.error(err));
  }

  launchCase = caseId => {
    localStorage.setItem('case', caseId);
    this.props.history.push(`/case:${caseId}`);
  }

  render() {
    return (
      <div className="cases">
        <Container>
          <div className="cases-list">
            <div className="cases-list-header">
              <h4 className="title">Cases results for you</h4>
              <div className="case-filter">
                <div className="filter">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="filter"
                    >
                      All Categories <span></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="add-new-case">
                  <Link to="/create-case">
                    <Button>Add new case</Button>
                  </Link>
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
                {this.state.cases.map(newCase => (
                  <tr key={newCase.id} onClick={() => this.launchCase(newCase.id)}>
                    <td>{newCase.id}</td>
                    <td>{newCase.name}</td>
                    <td>Lagos</td>
                    <td>{newCase.inmateStatus}</td>
                    <td>{newCase.crimeDescription}</td>
                    <td>{newCase.allegedCrime}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    );
  }
}

// POst A Case

export default Cases;
