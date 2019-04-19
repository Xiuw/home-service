import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';
import "./Login.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:"",
      lastname:"",
      email:"",
      password: "",
      redirect:false
    };
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]:value});
  }
  
  onHandleSubmit =() => {
    fetch('http://localhost:3000/register',{
      method:'post',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        email:this.state.email,
        password:this.state.password
      })
    })
    .then(response => response.json())
    .then(acc =>{
       if(acc.id){
            this.props.userProfile(acc);
            this.props.routeState("login");
            this.setState({redirect:true});
        }
    })
  }

  render() {
    const{firstname,lastname, email, password,redirect} = this.state;
     if(redirect){
      return <Redirect to="/" />;
    }
   
    return (
    <div>
      <main className="form center">
            <legend className='center title'>Register</legend>
             <Form.Group>
              <Form.Label className="center">First Name</Form.Label>
              <Form.Control 
                name="firstname" 
                size="lg"
                autoComplete="first-name"
                placeholder="First name"
                value={firstname}
                onChange={this.handleChange}/>
            </Form.Group>
             <Form.Group >
              <Form.Label className="center">Last Name</Form.Label>
              <Form.Control 
                name="lastname" 
                size="lg"
                autoComplete="last-name"
                placeholder="Last name" 
                value={lastname}
                onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="center">Email</Form.Label>
              <Form.Control 
                name="email" 
                size="lg"
                autoComplete="username-email"
                placeholder="Enter email" 
                value={email}
                onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label className="center">Password</Form.Label>
              <Form.Control 
                value={password}
                name="password"
                size="lg" 
                type="password"
                autoComplete="password"
                placeholder="Password" 
                onChange={this.handleChange}
              />
            </Form.Group>
            
            <div className="center">
              <Button size="lg" className="text-center" variant="primary" type="submit" onClick={this.onHandleSubmit}>
                Submit
              </Button>
            </div>  
        </main>
     </div>
    )
  }
}



