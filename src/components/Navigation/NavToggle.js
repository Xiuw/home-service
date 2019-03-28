import React from 'react';
import './NavToggle.css'

const NavToggle = ({toggle})=>{
	return(
		<button className="toggle-button" onClick={toggle}>
		 <div className="toggle_bar"></div>
		  <div className="toggle_bar"></div>
		   <div className="toggle_bar"></div>
	   </button>

	)

}

export default NavToggle;