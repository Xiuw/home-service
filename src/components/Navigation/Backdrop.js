import React from 'react';
import './Backdrop.css'

const Backdrop = ({backdropClick})=>{
	return(
		<div className="backdrop" onClick={backdropClick}/>
		

	)

}

export default Backdrop;