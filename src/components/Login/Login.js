import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const {type,value} = e.target
    this.setState({[type]:value});
  }
  
  onHandleSubmit =() => {
    fetch('http://localhost:3000/login',{
      method:'post',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
    .then(response => response.json())
    .then(acc =>{
      if(acc.id){
        console.log("yes");
      }
    })
  }

  render() {
    const{email, password} = this.state;
    return (
      <main className="form center">
        <Form>
            <legend className='margin_btw center'>Login</legend>
            <Form.Group  className="margin_btw" controlId="formBasicEmail">
              <Form.Label className="center">Email</Form.Label>
              <Form.Control 
                type="email" 
                size="lg"
                autoComplete="username-email"
                placeholder="Enter email" 
                value={email}
                onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group className="margin_btw" controlId="formBasicPassword">
              <Form.Label className="center">Password</Form.Label>
              <Form.Control 
          
                value={password} 
                type="password" 
                size="lg" 
                autoComplete="current-password"
                placeholder="Password" 
                onChange={this.handleChange}
              />
            </Form.Group>
            
            <div className="center">
              <Button size="lg" className="text-center" variant="primary" type="submit" onClick={this.onHandleSubmit}>
                Submit
              </Button>
            </div>
        </Form>
            
        </main>
      
    )
  }
}