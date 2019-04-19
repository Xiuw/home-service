import React from 'react';
import NavToggle from './NavToggle';
import {Link} from 'react-router-dom';
import './Navigation.css'

const Navigation = ({toggleHandler,isLoggedIn, routeState, name}) => {


return(

	<header className="navBar">
		<nav className = "nav_navBar">
			<div className="toggleNav">
				<NavToggle toggle={toggleHandler}/>
			</div>
			<div className="logo"><Link to="/">Home Service</Link></div>
			<div className="spacer"></div>
			<div className="nav-items">
			  {
			  	isLoggedIn?
				<div>
				<ul>  		
	  				<li><Link className="link" to="account">{name}</Link></li>
	  		
	  				<li><Link className="link" to="/" onClick={()=>routeState("logout")}>Logout</Link></li>
				 </ul> 	
			  	</div>
			
			  	:
				<ul>
					<li><Link to="/login" className="link">Login</Link></li>
					<li><Link to="/register" className="link">Register</Link></li>
				</ul>
			  }	
			</div>

		</nav>
	</header>




	)




}



export default Navigation;