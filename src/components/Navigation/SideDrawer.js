import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css'

const SideDrawer = ({closeNav, show, isLoggedIn, routeState, name})=>{
	
	return(
		<nav  className={show? 'side-nav' : 'side-nav close'}>
				{
			  	isLoggedIn?
				
				<div>
				<p className="welcome">Welcome back!</p>		
 			  			<ul onClick={closeNav}>
 			  			
		  					<li><Link className="link" to="/">Home</Link></li>
		  					
		  					<li><Link className="link" to="/account">{name}</Link></li>
		  					
		  					<li><Link className="link" to="/" onClick={()=>routeState("logout")}>Logout</Link></li>
  						</ul>
				</div>	
			  	:
				<ul onClick={closeNav}>
					<li><Link to="/login" className="link">Login</Link></li>
					<li><Link to="/register" className="link">Register</Link></li>
				</ul>
			  }	
		</nav>

	)

}

export default SideDrawer;