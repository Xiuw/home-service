import React from 'react';
import NavToggle from './NavToggle';
import './Navigation.css'

const Navigation = ({toggleHandler}) => {

return(

	<header className="navBar">
		<nav className = "nav_navBar">
			<div className="toggleNav">
				<NavToggle toggle={toggleHandler}/>
			</div>
			<div className="logo"><a href="/">Home Service</a></div>
			<div className="spacer"></div>
			<div className="nav-items">
				<ul>
					<li><a href="/">Login</a></li>
					<li><a href="/">Register</a></li>
				</ul>

			</div>

		</nav>
	</header>




	)




}



export default Navigation;