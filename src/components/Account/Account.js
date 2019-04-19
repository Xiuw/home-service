import React from "react";
import {Link} from 'react-router-dom';
import './Account.css';

const Account = () =>{
	return(
		<div className="profile_link">
			<Link className="option" to="makepost">Make Post</Link>
			<Link className="option" to="profile">View Account</Link>
		</div>
	)
}

export default Account;