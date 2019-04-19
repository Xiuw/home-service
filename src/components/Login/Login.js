import React, { Component } from "react";
import { Form, Button} from "react-bootstrap";
import { Redirect} from 'react-router-dom';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      redirect:false
    };
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]:value});
  }
  
  onHandleSubmit =() => {
    fetch("http://localhost:3000/login",{
      method:"post",
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
    .then(response => response.json())
    .then(acc =>{
        if(acc.id){
            this.props.userProfile(acc);
            this.props.routeState("login");
            this.setState({redirect:true})
        }
      }
    )
  }

  render() {
    const{email, password,redirect} = this.state;
    if(redirect){
      return <Redirect to="/" />;
    }
    return (
      <main className="form center">
            <legend className='center title'>Login</legend>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="center">Email</Form.Label>
              <Form.Control 
                name="email" 
                size="lg"
                autoComplete="username-email"
                placeholder="Enter email" 
                value={email}
                onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="center">Password</Form.Label>
              <Form.Control 
          
                value={password} 
                name="password" 
                size="lg" 
                type="password"
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
        </main>
      
    )
  }
}



