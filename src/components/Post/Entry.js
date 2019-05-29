import React, {Component} from 'react';
import { Card, Button} from "react-bootstrap";
// import DisplayApost from './DisplayApost';
import './PostEntry.css';
import { Link } from 'react-router-dom'
// props = postId,date, title,city,state, description,category

class Entry extends Component{
	constructor(){
		super();
		this.state={
			display:null
		}
	}


  render(){
  	const {category, title, city, states,description, postId}= this.props;
	const newDescription = description.slice(0,150);
    return(

    <div>
    	<div>
	    <div className="item">
	    	<Card className="card">
	  			<Card.Header>{category}</Card.Header>
		  			<Card.Body>
		    		<Card.Title>{title}</Card.Title>
		    		<Card.Text>{newDescription}</Card.Text>
		    		<Card.Text>{city}, {states}</Card.Text>
		    		<Link to={`/post/${postId}`}><Button variant="primary">More detail</Button></Link>
		  			</Card.Body>
			</Card>
	    </div>
	    </div>
	    

	 
    </div>

    )
   }
}

export default Entry;