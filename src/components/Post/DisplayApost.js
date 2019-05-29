import React,{Component} from 'react';
import { Spinner} from "react-bootstrap";
import './PostEntry.css';

class DisplayApost extends Component{
	constructor(){
		super();
		this.state={
	        title:"",
	        description:"",
	        budget:"",
	        address:"",
	        city:"",
	        states:"",
	        date:"",
	        email:"",
	        phone:""		
		}
	}
	
  componentDidMount(){ //fetch data from the database
    fetch(`https://limitless-brushlands-99611.herokuapp.com${this.props.match.url}`)
    .then(response=>response.json())
    .then(data=> {
      this.handleDisplay(data);
    })
  }

 handleDisplay = (data)=>{
     this.setState({
      
         	title:data.title,
	        description:data.description,
	        budget:data.budget,
	        address:data.address,
	        city:data.city,
	        states:data.state,
	        date:data.post_date,
	        email:data.email,
	        phone:data.phone	
      
    })
  }

  render(){
  	// console.log(this.props.match.url);
  	const{title, description,budget,address,city,states,date,email,phone} = this.state;
    const date_E = date.slice(0,10);
    const phone_E =phone.slice(0,3) + "-" + phone.slice(3,6)+ "-" + phone.slice(6);
		
		return(
		    <div className="centerPost ">
			{title?
	    	 <div className="Card displayContent">
	  			<div className="Card.Body">
	  			  <h3 className="card-title" style={{textAlign:"left",color:"#3e4291"}}>{title}</h3>
	  			  <div className="m-3 pt-3">
	  			  <h5 className="card-subtitle mb-2 text-muted">Project Description:</h5>
	  			   <p className="card-text ml-5 text-info">{date_E}</p>	
	  			   <p className="card-text ml-5 text-dark">{description}</p>
	  			   </div>
	  			    <div className="m-3 pt-3">
	  			   <h5 className="card-subtitle mb-2 text-muted">Address:</h5>
	  			   <p className="card-text ml-5 text-dark">{address}<span className="ml-1"> {city}, {states}</span></p>
	  			   </div>
	  			  <div className="m-3 pt-3">
	  			   <h5 className="card-subtitle mb-2 text-muted">Budget:</h5>
	  			   <p className="card-text ml-5 text-danger">${budget}</p>
	  			   </div>
	  			   <div className="m-3 pt-3 ">
	  			   <h5 className="card-subtitle mb-2 text-muted">Email:</h5>
	  			   <p className="card-text ml-5 text-dark">{email}</p>	
	  			   </div>
	  			   <div className="m-3 pt-3">
	  			   <h5 className="card-subtitle mb-2 text-muted">Phone:</h5>
	  			   <p className="card-text ml-5 text-dark">{phone_E}</p>
	  			   </div>	
	  			</div>
			</div>
			: 
			<div className="d-flex justify-content-center" style={{marginTop:"120px"}}>
              <Spinner animation="border" role="status" size="lg">
                <span className="sr-only loading">Loading...</span>
              </Spinner>
             </div>
	 		}
		    </div>
		)
	}
}
export default DisplayApost;