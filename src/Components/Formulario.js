import React, { Component } from "react";
import { Input, Icon, Row, Button,Col } from "react-materialize";
class Formulario extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone_number: "",
    street_address: "",
    post_code: "",
    country: "",
    persons: []
    
  };

  handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

 showPerson = event => {
     //event.preventDefault()
    let result = []
      for(let i = 0; i<this.state.persons.length; i++){
          result.push(
              <Row>
                  <ul>
                      <li>FirstName:{this.state.persons[i].firstName}</li>
                      <li>LastName: {this.state.persons[i].lastName}</li>
                      <li>Email: {this.state.persons[i].email}</li>
                      <li>Phone NUmber: {this.state.persons[i].phone_number}</li>
                      <li>Street Address: {this.state.persons[i].street_address}</li>
                      <li>Postal Code:{this.state.persons[i].post_code}</li>
                      <li>Country: {this.state.persons[i].country}</li>
                  </ul>
                  <hr/>
              </Row>
          )
      }
  return result
     
 }
  handleSubmit = event => {
      
      event.preventDefault()
    let person = this.state 
      let persons = this.state.persons
      persons.push(person)
      this.setState({
          persons:persons
      })
      console.log(this.state.persons)
    };

 clearForm = () => {
  this.setState({
    firstName: "",
    lastName: "",
    email: "",
    phone_number: "",
    street_address: "",
    post_code: "",
    country: ""
  })

 }

 
  render() {
    return (
      <div className=" container form">
      <Row>
      <Col m={8}>
      <form id = "main" onSubmit={this.handleSubmit}>
          <h5 className="white-text ">Cuentanos Sobre ti</h5>
         
          <Row>
            <Input value={this.state.firstName} s={6} onChange={this.handleChange} name="firstName" type="text" label="First Name" />
            <Input value={this.state.lastName} s={6} onChange={this.handleChange} name="lastName" type="text" label="Last Name" />
            <Input value={this.state.email} s={6} onChange={this.handleChange} name="email" type="email" label="Email" />
            <Input value={this.state.phone_number} s={6} onChange={this.handleChange} name="phone_number" type="text" label="Phone Number" />
           
          </Row>
          <h5 className="white-text text-darken-3">Donde Vives</h5>
          <Row>
            <Input
            value={this.state.street_address}
              s={6}
              onChange={this.handleChange} name="street_address"
              type="text"
              label="Street Address"
            />
            <Input value={this.state.post_code} s={6} onChange={this.handleChange} name="post_code" type="text" label="Post Code" />
            <Input value={this.state.country} s={6} onChange={this.handleChange} name="country" type="select" label="Country">
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
            </Input>
            <Button  waves="light" type="submit" className="buttons">
              <Icon right>send</Icon>save
            </Button>
            
          
          </Row>
       
        </form>
        
        </Col>
        <Col m={4}>
      
            {this.showPerson()}
            <hr/>
            <Button waves="light" className="buttons" onClick={this.clearForm} >
                <Icon right>person</Icon>Clear Form
            </Button>
       </Col>
      </Row>
      

      </div>
    );
  }
}

export default Formulario;
