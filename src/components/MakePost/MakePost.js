import React, {Component} from "react";
import { Form,Col,Button} from "react-bootstrap";
import "./MakePost.css"

class MakePost extends Component{
	constructor(props){
		super(props);
		this.state = {
			title:"",
			category:"",
			description:"",
			contactEmail:"",
			contactPhone:"",
			budget:"",
			address:"",
			city:"",
			state:"",
			message:"",
			changeRoute:false
		}
	}

	handleChange = (e) => {
	    const {name,value} = e.target
	    this.setState({[name]:value});
	}

	handleClick =() =>{
		this.setState({
			changeRoute:false
		})
	}

	onHandleSubmit =()=>{
		const{title,category,description,contactEmail, contactPhone,budget,address,city, state}=this.state;
		fetch("http://localhost:3000/entry",{
	      	method:"post",
	        headers:{"Content-Type":'application/json'},
		         body:JSON.stringify({
		         	 title:title,
		         	 category:category,
		         	 description:description,
		         	 contactEmail:contactEmail,
		         	 contactPhone:contactPhone,
		         	 budget:budget,
		         	 address:address,
			         city:city,
			         state:state,
			         account_id: this.props.acc_id
	         	})
        })
    	.then(response => response.json())
    	.then(res =>{
    		if(res){
    			this.setState({
    				message:"Your post has been submitted",
    				changeRoute:true
    			})
    		}
		})
	
	}


	render(){
		const{message, changeRoute} =this.state;
		return(
			<div>
			{
			changeRoute?
			<div className="center">
				<p className="message">{message}</p>
				  <div className="center form">
	              	<Button size="lg" variant="primary" type="submit" onClick={this.handleClick}>
	                Back
	              	</Button>
            	</div>
			</div>
			:		
			<div className="center">
			 	<section className="form">
			 	<h2 className="title">Make a post</h2>
			 	   <Form.Group>
				    <Form.Label>Title</Form.Label>
				    <Form.Control size="lg" as="textarea" rows="1" name="title"  onChange={this.handleChange}/>
				  </Form.Group>
				<Form.Row>
				  <Form.Group as={Col}>
			      <Form.Label>Project Budget</Form.Label>
			      <Form.Control size="lg" name="budget"  onChange={this.handleChange}/>
			    </Form.Group>
				  <Form.Group>
				    <Form.Label>Category</Form.Label>
				    <Form.Control size="lg" as="select" name="category"  onChange={this.handleChange}>
				      <option>Choose...</option>
				      <option value="Basement">Basement</option>
				      <option value="Bathroom">Bathroom</option>
				      <option value="Kitchen">Kitchen</option>
				      <option value="Lawn">Lawn</option>
				      <option value="Gardening">Gardening</option>
				      <option value="Other">Other</option>
				    </Form.Control>
				  </Form.Group>
				 
			    </Form.Row>

			     <Form.Group >
				    <Form.Label>Description</Form.Label>
				    <Form.Control size="lg" as="textarea" rows="7" name="description"  onChange={this.handleChange} />
				  </Form.Group>
			
				<Form.Row>
				    <Form.Group as={Col} >
				      <Form.Label>Contact Email</Form.Label>
				      <Form.Control size="lg" type="first_name" placeholder="example@gmail.com" name="contactEmail"  onChange={this.handleChange}/>
				    </Form.Group>

				    <Form.Group as={Col} >
				      <Form.Label>Contact Phone</Form.Label>
				      <Form.Control size="lg" type="phone_number" placeholder="Ex:1234567890" name="contactPhone"  onChange={this.handleChange}/>
				    </Form.Group>
  				 </Form.Row>

  				<Form.Group>
				    <Form.Label>Address</Form.Label>
				    <Form.Control size="lg" as="textarea" rows="1" name="address"  onChange={this.handleChange}/>
				</Form.Group>

  				<Form.Row>
				    <Form.Group as={Col}>
				      <Form.Label>City</Form.Label>
				      <Form.Control size="lg" name="city"  onChange={this.handleChange}/>
				    </Form.Group>

				    <Form.Group as={Col}>
				      <Form.Label>State</Form.Label>
				      <Form.Control size="lg" as="select" name="state"  onChange={this.handleChange}>
				        <option>Choose...</option>
				        <option value="DC">DC</option>
				        <option value="MD">MD</option>
				        <option value="VA">VA</option>
				      </Form.Control>
				    </Form.Group>
			    </Form.Row> 

			    <div className="center submit">
	              	<Button size="lg" variant="primary" type="submit" onClick={this.onHandleSubmit}>
	                Submit
	              	</Button>
            	</div>
			   </section> 
			</div>
		 }
		 </div>
		)
	}
}

export default MakePost;