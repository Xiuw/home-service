import React from 'react';
import './SideDrawer.css'

const SideDrawer = ({show})=>{
	
	return(
		<nav  className={show? 'side-nav' : 'side-nav close'}>
			<ul>
				<li><a href="/">Login</a></li>
				<li><a href="/">Register</a></li>
			</ul>
		</nav>

	)

}

export default SideDrawer;