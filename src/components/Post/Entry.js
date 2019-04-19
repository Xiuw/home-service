import React from 'react';
import { Card, Button} from "react-bootstrap";
import './PostEntry.css';


const Entry = ({date, budget, title, city,state, description,category}) =>{
	const newDescription = description.slice(0,150);
    return(
    <div className="item">
 
    	<Card className="card">
  			<Card.Header>{category}</Card.Header>
	  			<Card.Body>
	    		<Card.Title>{title}</Card.Title>
	    		<Card.Text>{newDescription}</Card.Text>
	    		<Card.Text>{city},{state}</Card.Text>
	    		<Card.Text>${budget}</Card.Text>
	    		<Button variant="primary">More detail</Button>
	  			</Card.Body>
		</Card>
    </div>

    )
}

export default Entry;